import { cn } from "@/lib/utils";

// List Component
interface ListItem {
	id: string;
	content: string;
}

interface ListProps {
	content: ListItem[];
	className?: string;
}

const List: React.FC<{ props: ListProps }> = ({ props }) => {
	return (
		<ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", props.className)}>
			{props.content.map((item) => (
				<li key={item.id}>{item.content}</li>
			))}
		</ul>
	);
};

export type ListType = {
	type: "List";
	props: ListProps;
};

export { List };
