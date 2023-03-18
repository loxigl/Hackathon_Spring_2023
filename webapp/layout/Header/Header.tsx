import { HeaderProps } from './Header.props';
import styles from "./Header.module.css";
import Link from 'next/link';
import Logo from './logo.svg';
import cn from 'classnames';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			<nav className={styles.headerWrapper}>
        <Link className={styles.logoWrapper} href={'/'}>
          <Logo className={styles.logo} width={64} height={64}/>
          <span className={styles.logoText}>Terra Quiz</span>
        </Link>
        <div className={styles.siteList}>
          <Link className={styles.siteLink} href={'quizzes'}>
            Викторины
          </Link>
        </div>
      </nav>
		</header>
	);
};
