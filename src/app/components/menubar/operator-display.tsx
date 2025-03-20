import {
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import React from "react";
import { usePreferences } from "./atoms";

export function MenuOperatorDisplay() {
	const { togglePreferences } = usePreferences();

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				togglePreferences();
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [togglePreferences]);

	return (
		<MenubarMenu>
			<MenubarTrigger className="font-bold">Operator Display</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>About Music</MenubarItem>
				<MenubarSeparator />
				<MenubarItem onClick={() => togglePreferences()}>
					Preferences <MenubarShortcut>⌘P</MenubarShortcut>
				</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>
					Hide Music... <MenubarShortcut>⌘H</MenubarShortcut>
				</MenubarItem>
				<MenubarItem>
					Hide Others... <MenubarShortcut>⇧⌘H</MenubarShortcut>
				</MenubarItem>
				<MenubarShortcut />
				<MenubarItem>
					Quit Music <MenubarShortcut>⌘Q</MenubarShortcut>
				</MenubarItem>
			</MenubarContent>
		</MenubarMenu>
	);
}
