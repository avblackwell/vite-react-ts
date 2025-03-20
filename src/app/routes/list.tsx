import { createFileRoute } from "@tanstack/react-router";
import Grid from "../p-dnd/grid";
import { List } from "../p-dnd/list";
import Test from "../p-dnd/test";
export const Route = createFileRoute("/list")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col">
			<List />
			<Grid />
			<Test />
		</div>
	);
}
