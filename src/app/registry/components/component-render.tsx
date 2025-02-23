import {
	BlockQuote,
	type BlockQuoteType,
} from "@/registry/components/block-quote";
import { Button, type ButtonType } from "@/registry/components/button";
import { Grid, type GridType } from "@/registry/components/grid";
import { Heading, type HeadingType } from "@/registry/components/heading";
import { List, type ListType } from "@/registry/components/list";
import { Paragraph, type ParagraphType } from "@/registry/components/paragraph";
import { Card, type CardType } from "./card";

// Union type of all possible components
export type ComponentType =
	| HeadingType
	| ButtonType
	| ParagraphType
	| ListType
	| BlockQuoteType
	| GridType
	| CardType;

// Central component renderer
export function ComponentRender({
	component,
}: { component: ComponentType }): JSX.Element {
	switch (component.type) {
		case "Heading":
			return <Heading {...component} />;
		case "Button":
			return <Button {...component} />;
		case "Paragraph":
			return <Paragraph {...component} />;
		case "List":
			return <List {...component} />;
		case "BlockQuote":
			return <BlockQuote {...component} />;
		case "Grid":
			return <Grid {...component} />;
		case "Card":
			return <Card {...component} />;
		default: {
			throw new Error(
				"Unreachable code - all component types should be handled",
			);
		}
	}
}
