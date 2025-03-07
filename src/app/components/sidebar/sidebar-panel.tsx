import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { ResizablePanel } from "@/components/ui/resizable";
import {
	SidebarGroupLabel,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
} from "@/components/ui/sidebar";
import {
	SidebarGroupAction,
	SidebarGroupContent,
} from "@/components/ui/sidebar";
import { SidebarGroup } from "@/components/ui/sidebar";
import { SidebarContent } from "@/components/ui/sidebar";
import { SidebarMenu } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { ChevronRight, Folder, Plus } from "lucide-react";
import React from "react";

type TreeItem = string | Array<string | TreeItem>;

interface PanelData {
	tree: TreeItem[];
	changes: Array<{ file: string; state: string }>;
}

export function SidebarPanel({
	data,
	label,
	defaultSize,
}: {
	data: PanelData;
	label: string;
	defaultSize?: number;
}) {
	const [isCollapsed, setIsCollapsed] = React.useState(false);
	return (
		<ResizablePanel
			collapsedSize={4}
			defaultSize={defaultSize}
			collapsible={true}
			minSize={8}
			onCollapse={() => {
				setIsCollapsed(true);
			}}
			onResize={() => {
				setIsCollapsed(false);
			}}
			className={cn(
				isCollapsed && "min-h-[40px] transition-all duration-300 ease-in-out",
			)}
		>
			<SidebarContent data-collapsed={isCollapsed} className="h-full">
				<SidebarGroup>
					{isCollapsed ? (
						<>
							<SidebarGroupLabel>{label}</SidebarGroupLabel>
							<SidebarGroupAction title="Add">
								<Plus /> <span className="sr-only">Add {label}</span>
							</SidebarGroupAction>
						</>
					) : (
						<>
							<SidebarGroupLabel>{label}</SidebarGroupLabel>
							<SidebarGroupAction title="Add">
								<Plus /> <span className="sr-only">Add {label}</span>
							</SidebarGroupAction>
							<SidebarGroupContent className="py-2">
								<SidebarMenu>
									{data.tree.map((item) => {
										const key = Array.isArray(item)
											? String(item[0])
											: String(item);
										return <Tree key={key} item={item} />;
									})}
								</SidebarMenu>
							</SidebarGroupContent>
						</>
					)}
				</SidebarGroup>
			</SidebarContent>
		</ResizablePanel>
	);
}

function Tree({ item }: { item: TreeItem }) {
	const [name, ...items] = Array.isArray(item) ? item : [item];
	if (!items.length) {
		return (
			<SidebarMenuButton
				isActive={name === "button.tsx"}
				className="data-[active=true]:bg-transparent"
			>
				{name}
			</SidebarMenuButton>
		);
	}
	return (
		<SidebarMenuItem>
			<Collapsible
				className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
				defaultOpen={name === "components" || name === "ui"}
			>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton>
						<ChevronRight className="transition-transform" />
						<Folder />
						{name}
					</SidebarMenuButton>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenuSub>
						{items.map((subItem) => {
							const key = Array.isArray(subItem)
								? String(subItem[0])
								: String(subItem);
							return <Tree key={key} item={subItem} />;
						})}
					</SidebarMenuSub>
				</CollapsibleContent>
			</Collapsible>
		</SidebarMenuItem>
	);
}
