import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import cn from 'classnames';
import { Input,Button } from '@/components';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				className={styles.input}
				placeholder="Поиск..."

			/>
			<Button
				appearance="primary"
				className={styles.button}
			>
				<GlassIcon />
			</Button>
		</div>
	);
};
