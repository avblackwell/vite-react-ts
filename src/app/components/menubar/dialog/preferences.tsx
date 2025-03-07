import {
	Bell,
	Check,
	Globe,
	Home,
	Keyboard,
	Link,
	Lock,
	Menu,
	MessageCircle,
	Paintbrush,
	Settings,
	Video,
} from "lucide-react";

import { usePreferences } from "@/components/menubar/atoms";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
} from "@/components/ui/sidebar";

const data = {
	nav: [
		{ name: "Notifications", icon: Bell },
		{ name: "Navigation", icon: Menu },
		{ name: "Home", icon: Home },
		{ name: "Appearance", icon: Paintbrush },
		{ name: "Messages & media", icon: MessageCircle },
		{ name: "Language & region", icon: Globe },
		{ name: "Accessibility", icon: Keyboard },
		{ name: "Mark as read", icon: Check },
		{ name: "Audio & video", icon: Video },
		{ name: "Connected accounts", icon: Link },
		{ name: "Privacy & visibility", icon: Lock },
		{ name: "Advanced", icon: Settings },
	],
};

// Preferences is the component that renders the preferences dialog
export function Preferences() {
	const { isOpen, togglePreferences } = usePreferences();
	return (
		<Dialog open={isOpen} onOpenChange={() => togglePreferences()}>
			<DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
				<DialogTitle className="sr-only">Settings</DialogTitle>
				<DialogDescription className="sr-only">
					Customize your settings here.
				</DialogDescription>
				<SidebarProvider className="items-start">
					<Sidebar collapsible="none" className="hidden md:flex">
						<SidebarContent>
							<SidebarGroup>
								<SidebarGroupContent>
									<SidebarMenu>
										{data.nav.map((item) => (
											<SidebarMenuItem key={item.name}>
												<SidebarMenuButton
													asChild
													isActive={item.name === "Messages & media"}
												>
													<div>
														<item.icon />
														<span>{item.name}</span>
													</div>
												</SidebarMenuButton>
											</SidebarMenuItem>
										))}
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
						</SidebarContent>
					</Sidebar>
					<main className="flex h-[480px] flex-1 flex-col overflow-hidden">
						<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
							<div className="flex items-center gap-2 px-4">
								<Breadcrumb>
									<BreadcrumbList>
										<BreadcrumbItem className="hidden md:block">
											<BreadcrumbLink href="#">Settings</BreadcrumbLink>
										</BreadcrumbItem>
										<BreadcrumbSeparator className="hidden md:block" />
										<BreadcrumbItem>
											<BreadcrumbPage>Messages & media</BreadcrumbPage>
										</BreadcrumbItem>
									</BreadcrumbList>
								</Breadcrumb>
							</div>
						</header>
						<div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
							<div className="aspect-video max-w-3xl rounded-xl bg-muted/50" />
							<div className="aspect-video max-w-3xl rounded-xl bg-muted/50" />
							<div className="aspect-video max-w-3xl rounded-xl bg-muted/50" />
						</div>
					</main>
				</SidebarProvider>
			</DialogContent>
		</Dialog>
	);
}
