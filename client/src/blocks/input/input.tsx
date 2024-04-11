import { FC } from 'react';
import { IInputProps } from './input.interfaces';
import styles from './input.module.scss';

export const Input: FC<IInputProps> = ({ testId, variant, value, onChange, type = 'text', placeholder }) => {
	return (
		<input
			data-testid={testId}
			className={`${styles.input} ${styles[variant]}`}
			type={type}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
		/>
	);
};
