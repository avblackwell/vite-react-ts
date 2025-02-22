import { SidebarMenuButton } from "@/components/ui/sidebar";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

import { SidebarHeader } from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";

export function PageDropdown() {
	return (
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton>
								Select Workspace
								<ChevronDown className="ml-auto" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-[--radix-popper-anchor-width]">
							<DropdownMenuItem>
								<span>Acme Inc</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<span>Acme Corp.</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
	);
}
