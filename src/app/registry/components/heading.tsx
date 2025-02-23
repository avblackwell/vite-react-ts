import { cn } from "@/lib/utils";

// H1 Component
interface HeadingProps {
	content: string;
	className?: string;
	level: 1 | 2 | 3 | 4;
}

const Heading: React.FC<{ props: HeadingProps }> = ({ props }) => {
	switch (props.level) {
		case 1:
			return (
				<h1
					className={cn(
						"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
						props.className,
					)}
				>
					{props.content}
				</h1>
			);
		case 2:
			return (
				<h2
					className={cn(
						"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
						props.className,
					)}
				>
					{props.content}
				</h2>
			);
		case 3:
			return (
				<h3
					className={cn(
						"scroll-m-20 text-2xl font-semibold tracking-tight",
						props.className,
					)}
				>
					{props.content}
				</h3>
			);
		case 4:
			return (
				<h4
					className={cn(
						"scroll-m-20 text-xl font-semibold tracking-tight",
						props.className,
					)}
				>
					{props.content}
				</h4>
			);
		default: {
			throw new Error(`Unknown heading level: ${props.level}`);
		}
	}
};

export type HeadingType = {
	type: "Heading";
	props: HeadingProps;
};

export { Heading };
