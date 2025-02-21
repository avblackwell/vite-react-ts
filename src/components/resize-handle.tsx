import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { AppSidebar } from "./app-sidebar";

import { ScrollArea } from "./ui/scroll-area";

export function ResizableHandleDemo() {
	return (
		<ResizablePanelGroup direction="horizontal">
			<ResizablePanel defaultSize={15} minSize={15} maxSize={25}>
				<AppSidebar />
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={70}>
				<div className="flex h-full items-center justify-center p-6">
					<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
						Jokester began sneaking into the castle in the middle of the night
						and leaving jokes all over the place: under the king's pillow, in
						his soup, even in the royal toilet. The king was furious, but he
						couldn't seem to stop Jokester. And then, one day, the people of the
						kingdom discovered that the jokes left by Jokester were so funny
						that they couldn't help but laugh. And once they started laughing,
						they couldn't stop.
					</ScrollArea>
				</div>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={15} minSize={15} maxSize={25}>
				<AppSidebar side="right" />
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
