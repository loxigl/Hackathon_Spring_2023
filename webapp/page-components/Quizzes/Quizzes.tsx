import styles from './Quizzes.module.css';
import {QuizzesProps} from './Quizzes.props';
import cn from 'classnames';
import React from 'react';
import {QuizCard} from '@/components/composite/QuizCard/QuizCard';


export const Quizzes = ({quizzesList, className, ...props}: QuizzesProps): JSX.Element => {

  return (
    <div className={cn(className, styles.quizzes)} {...props}>
      <h1 className={styles.title}>
        Каталог викторин
      </h1>
      <div className={styles.list}>
        {quizzesList && quizzesList.map(quiz => (
          <QuizCard quiz={quiz} key={quiz.id} />
        ))}
      </div>
    </div>
  );
};
