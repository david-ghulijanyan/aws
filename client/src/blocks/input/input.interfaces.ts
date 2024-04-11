export interface IInputProps {
	variant: 'primary' | 'secondary';
	value: string;
	onChange: (value: string) => void;
	type?: string;
	placeholder?: string;
	testId?: string;
}