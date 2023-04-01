import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';
import { format } from 'date-fns';


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div className={styles.footerWrapper}>
        <div className={styles.copyright}>
          TerraQuiz © 2023 - {format(new Date(), 'yyyy')} Все права защищены
        </div>
      </div>
		</footer>
	);
};
