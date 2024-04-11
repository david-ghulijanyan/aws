export interface IButtonProps {
	variant: 'primary' | 'secondary';
	children: React.ReactNode;
	onClick?: () => void;
	loading?: boolean;
	type?: 'button' | 'submit' | 'reset';
	testId?: string;
}
