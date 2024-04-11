import { FC } from 'react';
import styles from './footer.module.scss';

export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<p>&copy; {new Date().getFullYear()} Event management platform. All rights reserved.</p>
		</footer>
	);
};
