import React from 'react';
import { Layout } from '../components/Layout'
import Head from 'next/head';

const Home = () => {
    return <Layout>
        <Head>
            <title>Babel library</title>
        </Head>
        <main className='index_main'>
            <img src="index-image.png" alt="" width={400} />
        </main>
    </Layout>
};

export default Home;
