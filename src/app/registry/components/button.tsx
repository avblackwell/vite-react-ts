import { Button as ShadcnButton } from "@/components/ui/button";

// Button Component
interface ButtonProps {
	onClick?: () => void;
	label: string;
	className?: string;
}

const Button: React.FC<{ props: ButtonProps }> = ({ props }) => {
	return (
		<ShadcnButton
			type="button"
			className={props.className}
			onClick={props.onClick}
		>
			{props.label}
		</ShadcnButton>
	);
};

export type ButtonType = {
	type: "Button";
	props: ButtonProps;
};

export { Button };
