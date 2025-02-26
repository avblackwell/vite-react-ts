import { createFileRoute } from "@tanstack/react-router";
import { List } from "../p-dnd/list";
export const Route = createFileRoute("/list")({
	component: RouteComponent,
});

function RouteComponent() {
	return <List />;
}
