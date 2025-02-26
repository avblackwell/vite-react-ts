import { createFileRoute } from "@tanstack/react-router";
import { List } from "../p-dnd/list";
import Grid from "../p-dnd/grid";
export const Route = createFileRoute("/list")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-4 p-10">
			<List />
			<Grid />
		</div>
	);
}