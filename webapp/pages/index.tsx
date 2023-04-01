import React from 'react';
import {withLayout} from '@/layout/Layout';
import {MainPage} from '@/page-components/MainPage/MainPage';


function Home(): JSX.Element {
    return (
        <>
            <MainPage />
        </>
    );
}

export default withLayout(Home);
