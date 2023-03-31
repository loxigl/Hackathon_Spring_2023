import styles from './MainPage.module.css';
import {MainPageProps} from './MainPage.props';
import cn from 'classnames';
import {Hello} from '@/components';


export const MainPage = ({className, ...props}: MainPageProps): JSX.Element => {

  return (
    <div className={cn(className, styles.mainPage)} {...props}>
      <Hello/>
    </div>
  );
};
