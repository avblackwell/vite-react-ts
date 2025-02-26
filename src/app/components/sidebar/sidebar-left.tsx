import type React from "react";

import { Sidebar } from "@/components/ui/sidebar";

import { SidebarPanel } from "@/components/sidebar/sidebar-panel";
import { ResizablePanelGroup } from "@/components/ui/resizable";
import { ResizableHandle } from "@/components/ui/resizable";

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

export function SidebarLeft({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			className="top-[var(--header-height)] !h-[calc(100svh-var(--header-height))]"
			{...props}
		>
			<ResizablePanelGroup direction="vertical">
				<SidebarPanel data={data} label="Theme" />
				<ResizableHandle withHandle />
				<SidebarPanel data={data} label="Pages" defaultSize={4} />
				<ResizableHandle withHandle />
				<SidebarPanel data={data} label="Pages" defaultSize={4} />
			</ResizablePanelGroup>
		</Sidebar>
	);
}
