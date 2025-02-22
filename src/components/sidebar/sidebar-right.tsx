import React from "react";

import { Sidebar } from "@/components/ui/sidebar";

import { ResizablePanelGroup } from "@/components/ui/resizable";
import { ResizableHandle } from "@/components/ui/resizable";
import { SidebarPanel } from "./sidebar-panel";

const data = {
	changes: [],
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

export function SidebarRight({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			className="top-(--header-height) !h-[calc(100svh-var(--header-height))]"
			{...props}
		>
			<ResizablePanelGroup direction="vertical">
				<SidebarPanel data={data} label="Theme" defaultSize={4} />
				<ResizableHandle withHandle />
				<SidebarPanel data={data} label="Pages" defaultSize={4} />
				<ResizableHandle withHandle />
				<SidebarPanel data={data} label="Pages" defaultSize={4} />
			</ResizablePanelGroup>
		</Sidebar>
	);
}
