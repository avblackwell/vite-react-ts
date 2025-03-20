import {
	ComponentRender,
	type ComponentType,
} from "@/registry/components/component-render";
import { createFileRoute } from "@tanstack/react-router";

// Layout data type definitions
export interface LayoutTheme {
	colors: {
		primary: string;
	};
}

export interface LayoutData {
	theme: LayoutTheme;
	root: ComponentType[];
}

// Example of server data shape (this will be removed when actual server integration is done)
const layoutData: LayoutData = {
	theme: {
		colors: {
			primary: "red",
		},
	},
	root: [
		{
			type: "Grid",
			props: {
				className: "p-4",
				children: [
					{
						type: "Card",
						props: {
							title: "Card 1",
							description: "Card 1 description",
							footer: "Card 1 footer",
						},
					},
					{
						type: "Card",
						props: {
							title: "Card 1",
							description: "Card 1 description",
							footer: "Card 1 footer",
						},
					},
					{
						type: "Card",
						props: {
							title: "Card 1",
							description: "Card 1 description",
							footer: "Card 1 footer",
						},
					},
					{
						type: "Card",
						props: {
							title: "Card 1",
							description: "Card 1 description",
							footer: "Card 1 footer",
						},
					},
					{
						type: "Card",
						props: {
							title: "Card 1",
							description: "Card 1 description",
							footer: "Card 1 footer",
						},
					},
					{
						type: "Card",
						props: {
							title: "Card 1",
							description: "Card 1 description",
							footer: "Card 1 footer",
						},
					},
				],
			},
		},
	],
} as const;

// Layout component
interface LayoutProps {
	data: LayoutData;
}

function LayoutComponent({ data }: LayoutProps) {
	return (
		<>
			{data.root.map((component, index) => (
				<ComponentRender
					key={`${component.type}-${index}`}
					component={component}
				/>
			))}
		</>
	);
}

export const Route = createFileRoute("/json")({
	component: Index,
});

// TODO: Replace with actual data fetching when server integration is ready
function Index() {
	return <LayoutComponent data={layoutData} />;
}
