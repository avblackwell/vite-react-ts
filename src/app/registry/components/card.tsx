import {
	Card as ShadcnCard,
	CardContent as ShadcnCardContent,
	CardDescription as ShadcnCardDescription,
	CardFooter as ShadcnCardFooter,
	CardHeader as ShadcnCardHeader,
	CardTitle as ShadcnCardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type * as React from "react";
import { ComponentRender, type ComponentType } from "./component-render";
// Card Component
// TODO: extract the card component to separate files and add props to the card component

interface CardProps {
	title?: string;
	description?: string;
	footer?: string;
	className?: string;
}

export const Card: React.FC<{
	props: CardProps & {
		children?: ComponentType[];
	};
}> = ({ props }) => {
	// Ensure we have valid children before rendering
	const validChildren = Array.isArray(props.children) ? props.children : [];

	return (
		<ShadcnCard className={cn(props.className)}>
			<ShadcnCardHeader>
				<ShadcnCardTitle>{props.title}</ShadcnCardTitle>
				<ShadcnCardDescription>{props.description}</ShadcnCardDescription>
			</ShadcnCardHeader>
			<ShadcnCardContent>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
				iste est accusantium dolore nobis. Error at hic alias, quod, nobis est
				itaque exercitationem soluta veniam quidem id iste ab fuga!
				{validChildren.map((child, index) => (
					<ComponentRender key={`${child.type}-${index}`} component={child} />
				))}
			</ShadcnCardContent>
			<ShadcnCardFooter className="flex justify-between">
				<ShadcnCardDescription>{props.footer}</ShadcnCardDescription>
			</ShadcnCardFooter>
		</ShadcnCard>
	);
};

export type CardType = {
	type: "Card";
	props: CardProps;
	children?: ComponentType[];
};
