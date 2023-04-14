import {QuizCardProps} from './QuizCard.props';
import cn from 'classnames';
import {P} from '@/components';
import styles from './QuizCard.module.css';
import Image from 'next/image';
import React from 'react';

export const QuizCard = ({quiz, className, ...props}: QuizCardProps): JSX.Element => {

  return (
    <div className={cn(className, styles.card)} {...props}>
      <h3 className={styles.title}>
        {quiz.title}
      </h3>
      <span className={styles.date}>
        {quiz.createDate}
      </span>
      {quiz.description &&
        <P className={styles.description}>
          {quiz.description}
        </P>
      }
      <Image className={styles.image} src={'http://localhost' + quiz.photo} alt='Превью викторины' width={280} height={195}/>
    </div>
  );
};
