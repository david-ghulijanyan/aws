import { FC, PropsWithChildren } from 'react';
import styles from './content.module.scss';

export const Content: FC<PropsWithChildren> = ({ children }) => {
	return <main className={styles.content}>{children}</main>;
};
