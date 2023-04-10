import React from 'react';
import {withLayout} from '@/layout/Layout';
import axios from 'axios';
import {GetStaticProps} from 'next';
import {QuizModel} from '@/interfaces/quiz.interface';
import {Quizzes} from '@/page-components/Quizzes/Quizzes';
import * as process from 'process';


function Catalog({quizzesList}: CatalogProps): JSX.Element {
  return (
    <>
      <Quizzes quizzesList={quizzesList}/>
    </>
  );
}


export default withLayout(Catalog);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const {data: quizzesList} = await axios.get<QuizModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/quiz/`);
    return {
      props: {
        quizzesList
      }
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        quizzesList: []
      }
    };
  }
};

interface CatalogProps extends Record<string, unknown> {
  quizzesList: QuizModel[];
}


