import { cn } from "@/lib/utils";
import type * as React from "react";
import { ComponentRender, type ComponentType } from "./component-render";

// Grid Component
// Add props to the grid component along with className and fix the GridProps
// for example:
// props: {
// 	columns: 3,
// 	rows: 3,
// 	gap: 4,
// 	className: "grid auto-rows-min gap-4 md:grid-cols-3",
// }

interface GridProps {
	className?: string;
	children?: ComponentType[];
}

const Grid: React.FC<{ props: GridProps }> = ({ props }) => {
	// Ensure we have valid children before rendering
	const validChildren = Array.isArray(props.children) ? props.children : [];

	return (
		<div
			className={cn("grid auto-rows-min gap-4 md:grid-cols-3", props.className)}
		>
			{validChildren.map((child, index) => (
				<ComponentRender key={`${child.type}-${index}`} component={child} />
			))}
		</div>
	);
};

export type GridType = {
	type: "Grid";
	props: GridProps;
};

export { Grid };
