import React from 'react';
import {Button, Htag, Input, P, Search, Textarea} from '@/components';
import {withLayout} from '@/layout/Layout';


function Home(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <P size='l'>Большой</P>
            <P>Средний</P>
            <P size='s'>Маленький</P>
            <Input placeholder='тест'/>
            <Textarea placeholder='тест area'/>
            <Search />
        </>
    );
}

export default withLayout(Home);
