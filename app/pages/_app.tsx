import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'

import Router from 'next/router';
import NProgress from 'nprogress';
import 'toastify-js/src/toastify.css';

NProgress.configure({ easing: 'ease', speed: 500 });

Router.events.on('routeChangeStart', (url) => { NProgress.start(); });
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {

    return <>
        <Head>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <main>
            <Component  {...pageProps} />
        </main>
    </>

}

export default MyApp;