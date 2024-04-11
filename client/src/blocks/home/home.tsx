import { FC, PropsWithChildren } from 'react';
import styles from './home.module.scss';

import { EventsList } from '../eventsList';
import { Layout } from '../layout';

export const Home: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Layout>
			<div className={styles.home}>
				<EventsList />
			</div>
		</Layout>
	);
};
