import { useTheme } from "@/components/provider/theme-provider";
import {
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarContent,
	MenubarTrigger,
} from "@/components/ui/menubar";

export function MenuTheme() {
	const { theme, setTheme } = useTheme();

	return (
		<MenubarMenu>
			<MenubarTrigger>Theme</MenubarTrigger>
			<MenubarContent>
				<MenubarRadioGroup
					value={theme as string}
					onValueChange={(value) =>
						setTheme(value as "light" | "dark" | "system")
					}
				>
					<MenubarRadioItem value="light">Light</MenubarRadioItem>
					<MenubarRadioItem value="dark">Dark</MenubarRadioItem>
					<MenubarRadioItem value="system">System</MenubarRadioItem>
				</MenubarRadioGroup>
			</MenubarContent>
		</MenubarMenu>
	);
}
