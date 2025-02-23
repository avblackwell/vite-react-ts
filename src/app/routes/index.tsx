import {
	ComponentRender,
	type ComponentType,
} from "@/registry/components/component-render";
import { createFileRoute } from "@tanstack/react-router";

// // Container Component
// interface ContainerComponentProps extends BaseComponentProps {
// 	className: string;
// }

// interface ContainerComponentType {
// 	type: "Container";
// 	props: ContainerComponentProps;
// 	children?: ComponentType[];
// }

// function ContainerComponent({ props, children }: ContainerComponentType) {
// 	return (
// 		<div className={props.className}>
// 			{children?.map((child, index) => (
// 				<ComponentComponent key={`${child.type}-${index}`} component={child} />
// 			))}
// 		</div>
// 	);
// }

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
				className: "grid auto-rows-min gap-4 md:grid-cols-3 p-10",
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
						type: "Heading",
						props: {
							content:
								"Hello, world Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
							level: 1,
						},
					},
					{
						type: "Paragraph",
						props: {
							content:
								"Hello, world Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						},
					},
					{
						type: "List",
						props: {
							content: [
								{ id: "1", content: "Item 1" },
								{ id: "2", content: "Item 2" },
								{ id: "3", content: "Item 3" },
								{ id: "4", content: "Item 4" },
								{ id: "5", content: "Item 5" },
								{ id: "6", content: "Item 6" },
								{ id: "7", content: "Item 7" },
								{ id: "8", content: "Item 8" },
								{ id: "9", content: "Item 9" },
								{ id: "10", content: "Item 10" },
							],
						},
					},
					{
						type: "BlockQuote",
						props: {
							content:
								"Hello, world Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						},
					},
					{
						type: "Grid",
						props: {
							className: "grid-cols-2 gap-4",
							children: [
								{
									type: "Button",
									props: { label: "Button 1" },
								},
								{
									type: "Button",
									props: { label: "Button 2" },
								},
							],
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

export const Route = createFileRoute("/")({
	component: Index,
});

// TODO: Replace with actual data fetching when server integration is ready
function Index() {
	return <LayoutComponent data={layoutData} />;
}
