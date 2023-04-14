import {HelloProps} from './Hello.props';
import cn from 'classnames';
import {Htag, P} from '@/components';
import styles from './Hello.module.css';
import Image from 'next/image';

export const Hello = ({className, ...props}: HelloProps): JSX.Element => {

  return (
    <div className={cn(className, styles.hello)} {...props}>
      <div className={styles.textWrapper}>
        <Htag tag={'h1'} className={styles.title}>Добро пожаловать на Terra Quiz!</Htag>
        <P size={'m'}>Изучайте мир вместе с нами через увлекательные викторины по географии, истории,
        культуре и многому другому. Проверьте свои знания и расширьте горизонты в интересной и увлекательной форме!
        </P>
      </div>
      <Image width={500} height={500} src={'/blocks/Hello/mainBlock.png'} alt={'Человек на карте'}/>
    </div>
  );
};
