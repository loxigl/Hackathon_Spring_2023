import {DetailedHTMLProps, HTMLAttributes} from 'react';
import {QuizModel} from '@/interfaces/quiz.interface';

export interface QuizzesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  quizzesList: QuizModel[];
}
