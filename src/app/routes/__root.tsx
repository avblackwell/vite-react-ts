import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Menu } from "@/components/menubar/menu";

import { SidebarLeft } from "@/components/sidebar/sidebar-left";
import { SidebarRight } from "@/components/sidebar/sidebar-right";

export const Route = createRootRoute({
	component: () => (
		<div className="[--header-height:calc(theme(spacing.10))]">
			<SidebarProvider className="flex flex-col">
				<Menu />
				<div className="flex flex-1">
					<SidebarLeft />
					<SidebarInset>
						<div className="flex flex-1 flex-col gap-4 p-4">
							<div className="mx-auto h-[100vh] w-full max-w-3xl bg-muted/50 p-4">
								<Outlet />
							</div>
						</div>
					</SidebarInset>
					<SidebarRight side="right" />
				</div>
			</SidebarProvider>
		</div>
	),
});
