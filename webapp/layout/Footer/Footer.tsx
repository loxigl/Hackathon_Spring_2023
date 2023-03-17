import { FooterProps } from './Footer.props';
import cn from 'classnames';


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className)} {...props}>
			Footer
		</footer>
	);
};
