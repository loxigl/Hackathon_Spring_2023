import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';
import {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>TerraQuiz</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
