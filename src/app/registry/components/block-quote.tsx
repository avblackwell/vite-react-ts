import { cn } from "@/lib/utils";

// BlockQuote Component
interface BlockQuoteProps {
	content: string;
	className?: string;
}

const BlockQuote: React.FC<{ props: BlockQuoteProps }> = ({ props }) => {
	return (
		<blockquote className={cn("mt-6 border-l-2 pl-6 italic", props.className)}>
			{props.content}
		</blockquote>
	);
};

export type BlockQuoteType = {
	type: "BlockQuote";
	props: BlockQuoteProps;
};

export { BlockQuote };
