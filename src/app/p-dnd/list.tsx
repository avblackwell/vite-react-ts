import { triggerPostMoveFlash } from "@atlaskit/pragmatic-drag-and-drop-flourish/trigger-post-move-flash";
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import { reorderWithEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Task } from "./task";
import { type TTask, getTasks } from "./task-data";
import { isTaskData } from "./task-data";

export function List() {
	const [tasks, setTasks] = useState<TTask[]>(() => getTasks());

	useEffect(() => {
		return monitorForElements({
			canMonitor({ source }) {
				return isTaskData(source.data);
			},
			onDrop({ location, source }) {
				const target = location.current.dropTargets[0];
				if (!target) {
					return;
				}

				const sourceData = source.data;
				const targetData = target.data;

				if (!isTaskData(sourceData) || !isTaskData(targetData)) {
					return;
				}

				const indexOfSource = tasks.findIndex(
					(task) => task.id === sourceData.taskId,
				);
				const indexOfTarget = tasks.findIndex(
					(task) => task.id === targetData.taskId,
				);

				if (indexOfTarget < 0 || indexOfSource < 0) {
					return;
				}

				const closestEdgeOfTarget = extractClosestEdge(targetData);

				// Using `flushSync` so we can query the DOM straight after this line
				flushSync(() => {
					setTasks(
						reorderWithEdge({
							list: tasks,
							startIndex: indexOfSource,
							indexOfTarget,
							closestEdgeOfTarget,
							axis: "vertical",
						}),
					);
				});
				// Being simple and just querying for the task after the drop.
				// We could use react context to register the element in a lookup,
				// and then we could retrieve that element after the drop and use
				// `triggerPostMoveFlash`. But this gets the job done.
				const element = document.querySelector(
					`[data-task-id="${sourceData.taskId}"]`,
				);
				if (element instanceof HTMLElement) {
					triggerPostMoveFlash(element);
				}
			},
		});
	}, [tasks]);

	return (
		<div className="w-full">
			<div className="flex flex-col gap-2 border rounded p-2">
				{tasks.map((task) => (
					<Task key={task.id} task={task} />
				))}
			</div>
		</div>
	);
}
