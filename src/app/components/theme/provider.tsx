import { modeAtom, themeAtom } from "@/components/theme/atoms";
import { useAtomValue } from "jotai";
import * as React from "react";

type ThemeProviderProps = {
	children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
	const theme = useAtomValue(themeAtom);
	const mode = useAtomValue(modeAtom);

	React.useEffect(() => {
		const root = window.document.documentElement;
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const applyTheme = () => {
			root.classList.remove(
				"zinc",
				"red",
				"blue",
				"green",
				"orange",
				"rose",
				"yellow",
				"violet",
				"light",
				"dark",
			);

			if (mode === "system") {
				root.classList.add(mediaQuery.matches ? "dark" : "light");
			} else {
				root.classList.add(mode);
			}
			root.classList.add(theme);
		};

		applyTheme();
		mediaQuery.addEventListener("change", applyTheme);

		return () => mediaQuery.removeEventListener("change", applyTheme);
	}, [theme, mode]);

	return children;
}
