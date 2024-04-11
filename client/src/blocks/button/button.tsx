import styles from './button.module.scss';
import { IButtonProps } from './button.interfaces';
import { FC } from 'react';

export const Button: FC<IButtonProps> = ({ testId, variant, children, onClick, loading = false, type = "button" }) => {
	return (
		<button data-testid={testId} type={type} className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
			{loading ? "Loading..." : children}
		</button>
	);
};
