import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react";
import React from "react";

import {
	Sidebar,
	SidebarHeader,
	SidebarSeparator,
} from "@/components/ui/sidebar";

import { ResizablePanelGroup } from "@/components/ui/resizable";
import { ResizableHandle } from "@/components/ui/resizable";
import { ResizablePanel } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { LayoutTree } from "./layout-tree";
import { ComponentList } from "./component-list";
import { PageSwitcher } from "./page-switcher";
import { PageList } from "./page-list";
import { ContextTabs } from "./context-tabs";

const pages = [
	{
		name: "Acme Inc",
		logo: GalleryVerticalEnd,
		plan: "Enterprise",
	},
	{
		name: "Acme Corp.",
		logo: AudioWaveform,
		plan: "Startup",
	},
	{
		name: "Evil Corp.",
		logo: Command,
		plan: "Free",
	},
];

export function SidebarLeft({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	const [isComponentsCollapsed, setIsComponentsCollapsed] =
		React.useState(false);
	const [isLayoutCollapsed, setIsLayoutCollapsed] = React.useState(false);
	const [isPageCollapsed, setIsPageCollapsed] = React.useState(false);

	return (
		<Sidebar
			className="top-(--header-height) !h-[calc(100svh-var(--header-height))]"
			{...props}
		>
			{/* <SidebarHeader>
				<ContextTabs />
			</SidebarHeader>
			<SidebarSeparator className="mx-0" /> */}
			<ResizablePanelGroup direction="vertical">
				<ResizablePanel
					collapsedSize={4}
					collapsible={true}
					minSize={8}
					onCollapse={() => {
						setIsPageCollapsed(true);
					}}
					onResize={() => {
						setIsPageCollapsed(false);
					}}
					className={cn(
						isPageCollapsed &&
							"min-h-[40px] transition-all duration-300 ease-in-out",
					)}
				>
					<PageList isCollapsed={isPageCollapsed} />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel
					collapsedSize={4}
					defaultSize={4}
					collapsible={true}
					minSize={8}
					onCollapse={() => {
						setIsComponentsCollapsed(true);
					}}
					onResize={() => {
						setIsComponentsCollapsed(false);
					}}
					className={cn(
						isComponentsCollapsed &&
							"min-h-[40px] transition-all duration-300 ease-in-out",
					)}
				>
					<ComponentList isCollapsed={isComponentsCollapsed} />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel
					collapsedSize={4}
					defaultSize={4}
					collapsible={true}
					minSize={8}
					onCollapse={() => {
						setIsLayoutCollapsed(true);
					}}
					onResize={() => {
						setIsLayoutCollapsed(false);
					}}
					className={cn(
						isLayoutCollapsed &&
							"min-h-[40px] transition-all duration-300 ease-in-out",
					)}
				>
					<LayoutTree isCollapsed={isLayoutCollapsed} />
				</ResizablePanel>
			</ResizablePanelGroup>
		</Sidebar>
	);
}
