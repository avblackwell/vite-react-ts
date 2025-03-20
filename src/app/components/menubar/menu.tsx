import { MenuMode } from "@/components/menubar/mode";
import { MenuOperatorDisplay } from "@/components/menubar/operator-display";
import { MenuTheme } from "@/components/menubar/theme";
import { Button } from "@/components/ui/button";
import { Menubar } from "@/components/ui/menubar";
import { Link } from "@tanstack/react-router";
import { Preferences } from "./dialog/preferences";

export function Menu() {
	return (
		<header className="flex sticky top-0 z-50 w-full items-center border-b bg-background">
			<div className="flex h-(--header-height) w-full items-center">
				<Menubar className="rounded-none border-b border-none px-2">
					<MenuOperatorDisplay />
					<MenuMode />

					<MenuTheme />
				</Menubar>
			</div>
			<Link to="/json">
				<Button variant="ghost">json</Button>
			</Link>
			<Link to="/list">
				<Button variant="ghost">List</Button>
			</Link>
			<Preferences />
		</header>
	);
}
