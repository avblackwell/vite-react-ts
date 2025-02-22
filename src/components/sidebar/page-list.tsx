import { ChevronRight, Folder, Plus } from "lucide-react";

import {
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarMenuSub,
	SidebarGroupAction,
} from "@/components/ui/sidebar";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

const tree = {
	changes: [
		{
			file: "README.md",
			state: "M",
		},
		{
			file: "api/hello/route.ts",
			state: "U",
		},
		{
			file: "app/layout.tsx",
			state: "M",
		},
	],
	tree: [
		[
			"app",
			[
				"api",
				["hello", ["route.ts"]],
				"page.tsx",
				"layout.tsx",
				["blog", ["page.tsx"]],
			],
		],
		[
			"components",
			["ui", "button.tsx", "card.tsx"],
			"header.tsx",
			"footer.tsx",
		],
		["lib", ["util.ts"]],
		["public", "favicon.ico", "vercel.svg"],
		".eslintrc.json",
		".gitignore",
		"next.config.js",
		"tailwind.config.js",
		"package.json",
		"README.md",
	],
};

export function PageList({ isCollapsed }: { isCollapsed: boolean }) {
	return (
		<SidebarContent data-collapsed={isCollapsed} className="h-full">
			<SidebarGroup>
				{isCollapsed ? (
					<>
						<SidebarGroupLabel>Pages</SidebarGroupLabel>
						<SidebarGroupAction title="Add Project">
							<Plus /> <span className="sr-only">Add Project</span>
						</SidebarGroupAction>
					</>
				) : (
					<>
						<SidebarGroupLabel>Pages</SidebarGroupLabel>
						<SidebarGroupAction title="Add Project">
							<Plus /> <span className="sr-only">Add Project</span>
						</SidebarGroupAction>
						<SidebarGroupContent className="py-2">
							<SidebarMenu>
								{tree.tree.map((item, index) => (
									<Tree key={index} item={item} />
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</>
				)}
			</SidebarGroup>
		</SidebarContent>
	);
}

function Tree({ item }: { item: string | any[] }) {
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
						{items.map((subItem, index) => (
							<Tree key={index} item={subItem} />
						))}
					</SidebarMenuSub>
				</CollapsibleContent>
			</Collapsible>
		</SidebarMenuItem>
	);
}
