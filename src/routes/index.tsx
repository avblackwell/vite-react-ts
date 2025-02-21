import { ResizableHandleDemo } from "@/components/resize-handle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return <ResizableHandleDemo />;
}
