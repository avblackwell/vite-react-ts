import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Menu } from "@/components/menu";
import { ResizableHandleDemo } from "@/components/resize-handle";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="[--header-height:calc(theme(spacing.10))]">
				<SidebarProvider className="flex flex-col">
					<Menu />
					{/* <Outlet />
						<TanStackRouterDevtools /> */}
					<ResizableHandleDemo />
					{/* <SiteHeader /> */}
					{/* <div className="flex flex-1"> */}
					{/* <AppSidebar /> */}
					{/* <SidebarInset> */}
					{/* <div className="flex flex-1 flex-col ">
								<Outlet />
								<TanStackRouterDevtools />
							</div> */}
					{/* </SidebarInset> */}
					{/* <AppSidebar side="right" /> */}
					{/* </div> */}
				</SidebarProvider>
			</div>
		</>
	),
});

// export const Route = createRootRoute({
// 	component: () => (
// 		<>
// 			<div className="[--header-height:calc(theme(spacing.14))]">
// 				<SidebarProvider>
// 					<SiteHeader />
// 					<div className="flex flex-1">
// 						<AppSidebar />
// 						<SidebarInset>
// 							<div className="flex flex-1 flex-col gap-4 p-4">
// 								<div className="grid auto-rows-min gap-4 md:grid-cols-3">
// 									<div className="aspect-video rounded-xl bg-muted/50" />
// 									<div className="aspect-video rounded-xl bg-muted/50" />
// 									<div className="aspect-video rounded-xl bg-muted/50" />
// 								</div>
// 								<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
// 							</div>
// 						</SidebarInset>
// 						<SidebarRight side="right" />
// 					</div>
// 				</SidebarProvider>
// 			</div>
// 		</>
// 	),
// });
