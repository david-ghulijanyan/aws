import { FC } from 'react';
import styles from './form.module.scss';
import { IFormProps } from './form.interfaces';

export const Form: FC<IFormProps> = ({ testId, children, onSubmit }) => {
	return (
		<form data-testid={testId} className={styles.form} onSubmit={onSubmit}>
			{children}
		</form>
	);
};
