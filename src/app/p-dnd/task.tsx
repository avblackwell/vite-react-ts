import { cn } from "@/lib/utils";
import {
	type Edge,
	attachClosestEdge,
	extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import {
	draggable,
	dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { pointerOutsideOfPreview } from "@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview";
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview";
import { GripVertical } from "lucide-react";
import { type HTMLAttributes, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import invariant from "tiny-invariant";
import { DropIndicator } from "./drop-indicator";
import { Status } from "./status";
import { type TTask, getTaskData, isTaskData } from "./task-data";

type TaskState =
	| { type: "idle" }
	| { type: "preview"; container: HTMLElement }
	| { type: "is-dragging" }
	| { type: "is-dragging-over"; closestEdge: Edge | null };

const stateStyles: {
	[Key in TaskState["type"]]?: HTMLAttributes<HTMLDivElement>["className"];
} = {
	"is-dragging": "opacity-40",
};

const idle: TaskState = { type: "idle" };

export function Task({ task }: { task: TTask }) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [state, setState] = useState<TaskState>(idle);

	useEffect(() => {
		const element = ref.current;
		invariant(element);
		return combine(
			draggable({
				element,
				getInitialData() {
					return getTaskData(task);
				},
				onGenerateDragPreview({ nativeSetDragImage }) {
					setCustomNativeDragPreview({
						nativeSetDragImage,
						getOffset: pointerOutsideOfPreview({
							x: "16px",
							y: "8px",
						}),
						render({ container }) {
							setState({ type: "preview", container });
						},
					});
				},
				onDragStart() {
					setState({ type: "is-dragging" });
				},
				onDrop() {
					setState(idle);
				},
			}),
			dropTargetForElements({
				element,
				canDrop({ source }) {
					// not allowing dropping on yourself
					if (source.element === element) {
						return false;
					}
					// only allowing tasks to be dropped on me
					return isTaskData(source.data);
				},
				getData({ input }) {
					const data = getTaskData(task);
					return attachClosestEdge(data, {
						element,
						input,
						allowedEdges: ["top", "bottom"],
					});
				},
				getIsSticky() {
					return true;
				},
				onDragEnter({ self }) {
					const closestEdge = extractClosestEdge(self.data);
					setState({ type: "is-dragging-over", closestEdge });
				},
				onDrag({ self }) {
					const closestEdge = extractClosestEdge(self.data);

					// Only need to update react state if nothing has changed.
					// Prevents re-rendering.
					setState((current) => {
						if (
							current.type === "is-dragging-over" &&
							current.closestEdge === closestEdge
						) {
							return current;
						}
						return { type: "is-dragging-over", closestEdge };
					});
				},
				onDragLeave() {
					setState(idle);
				},
				onDrop() {
					setState(idle);
				},
			}),
		);
	}, [task]);

	return (
		<>
			<div className="relative">
				<div
					// Adding data-attribute as a way to query for this for our post drop flash
					data-task-id={task.id}
					ref={ref}
					className={cn(
						"flex text-sm flex-row items-center border border-solid rounded p-2 pl-0 hover:bg-muted hover:cursor-grab",
						stateStyles[state.type],
					)}
				>
					<div className="w-6 flex justify-center">
						<GripVertical size={10} />
					</div>
					<span className="truncate flex-grow flex-shrink">{task.content}</span>
					<Status status={task.status} />
				</div>
				{state.type === "is-dragging-over" && state.closestEdge ? (
					<DropIndicator edge={state.closestEdge} gap={"8px"} />
				) : null}
			</div>
			{state.type === "preview"
				? createPortal(<DragPreview task={task} />, state.container)
				: null}
		</>
	);
}

// A simplified version of our task for the user to drag around
function DragPreview({ task }: { task: TTask }) {
	return (
		<div className="border-solid rounded p-2 bg-muted">{task.content}</div>
	);
}
