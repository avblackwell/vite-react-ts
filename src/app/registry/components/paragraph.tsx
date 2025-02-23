import { cn } from "@/lib/utils";

// Paragraph Component
interface ParagraphProps {
	content: string;
	className?: string;
}

const Paragraph: React.FC<{ props: ParagraphProps }> = ({ props }) => {
	return (
		<p className={cn("leading-7 [&:not(:first-child)]:mt-6", props.className)}>
			{props.content}
		</p>
	);
};

export type ParagraphType = {
	type: "Paragraph";
	props: ParagraphProps;
};

export { Paragraph };
