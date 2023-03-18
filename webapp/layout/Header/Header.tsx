import { HeaderProps } from './Header.props';
import styles from "./Header.module.css";
import Link from 'next/link';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={styles.header} {...props}>

			Header
		</header>
	);
};
