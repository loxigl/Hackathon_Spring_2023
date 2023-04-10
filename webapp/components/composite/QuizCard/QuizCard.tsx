import {QuizCardProps} from './QuizCard.props';
import cn from 'classnames';
import {Htag, P} from '@/components';
import styles from './QuizCard.module.css';
import Image from 'next/image';
import React from 'react';

export const QuizCard = ({quiz, className, ...props}: QuizCardProps): JSX.Element => {

  return (
    <div className={cn(className, styles.quiz)} {...props}>
      {<h3>
        {quiz.title && 'Заголовок'}
      </h3>


      }
      {quiz.description &&
        <P>
          {quiz.description}
        </P>
      }
      {/*<Image src={process.env.NEXT_PUBLIC_DOMAIN + quiz.photo} alt='Превью викторины' width={260} height={195}/>*/}
    </div>
  );
};
