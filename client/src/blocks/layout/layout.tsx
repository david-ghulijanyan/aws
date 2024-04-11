import { FC, PropsWithChildren } from 'react';
import styles from './layout.module.scss';
import { Content } from '../content';
import { Footer } from '../footer';
import { Header } from '../header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<Content>{children}</Content>
			<Footer />
		</div>
	);
};
