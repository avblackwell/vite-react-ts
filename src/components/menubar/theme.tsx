import {
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarContent,
	MenubarTrigger,
	MenubarSeparator,
} from "@/components/ui/menubar";
import { Mode, Theme, useTheme } from "@/components/theme/atoms";

const themes = [
	{ value: "zinc", label: "Zinc" },
	{ value: "red", label: "Red" },
	{ value: "blue", label: "Blue" },
	{ value: "green", label: "Green" },
	{ value: "orange", label: "Orange" },
	{ value: "rose", label: "Rose" },
	{ value: "yellow", label: "Yellow" },
	{ value: "violet", label: "Violet" },
] as const;

const modes = [
	{ value: "light", label: "Light" },
	{ value: "dark", label: "Dark" },
	{ value: "system", label: "System" },
] as const;

export function MenuTheme() {
	const { theme, setTheme, mode, setMode } = useTheme();

	return (
		<MenubarMenu>
			<MenubarTrigger>Theme</MenubarTrigger>
			<MenubarContent>
				<MenubarRadioGroup
					value={theme}
					onValueChange={(value) => setTheme(value as Theme)}
				>
					{themes.map(({ value, label }) => (
						<MenubarRadioItem key={value} value={value}>
							{label}
						</MenubarRadioItem>
					))}
				</MenubarRadioGroup>
				<MenubarSeparator />
				<MenubarRadioGroup
					value={mode}
					onValueChange={(value) => setMode(value as Mode)}
				>
					{modes.map(({ value, label }) => (
						<MenubarRadioItem key={value} value={value}>
							{label}
						</MenubarRadioItem>
					))}
				</MenubarRadioGroup>
			</MenubarContent>
		</MenubarMenu>
	);
}
