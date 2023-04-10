import {DetailedHTMLProps, HTMLAttributes} from 'react';
import {QuizModel} from '@/interfaces/quiz.interface';

export interface QuizCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  quiz: QuizModel;
}
