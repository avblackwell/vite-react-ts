import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import type { BaseColor } from "@/registry/registry-base-colors";
import type { Style } from "@/registry/registry-styles";

type Config = {
	style: Style["name"];
	theme: BaseColor["name"];
	radius: number;
	packageManager: "npm" | "yarn" | "pnpm" | "bun";
	installationType: "cli" | "manual";
};

const configAtom = atomWithStorage<Config>("config", {
	style: "new-york",
	theme: "zinc",
	radius: 0,
	packageManager: "pnpm",
	installationType: "cli",
});

export function useConfig() {
	return useAtom(configAtom);
}
