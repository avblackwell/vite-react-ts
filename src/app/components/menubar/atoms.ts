import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useCallback } from "react";

// Preferences is a boolean that determines if the preferences dialog is open
export type Preferences = true | false;
export const preferencesAtom = atomWithStorage<Preferences>(
	"preferences",
	false,
);

// usePreferences is a hook that returns the preferences and a function to toggle the preferences dialog
export function usePreferences() {
	const [isOpen, setIsOpen] = useAtom(preferencesAtom);

	// togglePreferences is a function that toggles the preferences dialog
	const togglePreferences = useCallback(() => {
		setIsOpen((prev: Preferences) => !prev);
	}, [setIsOpen]);

	return {
		isOpen,
		togglePreferences,
	};
}
