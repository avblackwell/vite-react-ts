import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarMenuItem } from "../ui/sidebar";
import { SidebarMenu } from "../ui/sidebar";
import { SidebarHeader } from "../ui/sidebar";

export function ContextTabs() {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<Tabs defaultValue="account">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="account">Account</TabsTrigger>
						<TabsTrigger value="password">Password</TabsTrigger>
					</TabsList>
				</Tabs>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
