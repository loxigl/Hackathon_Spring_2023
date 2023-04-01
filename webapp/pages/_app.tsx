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

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                      rel="stylesheet"/>

            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
