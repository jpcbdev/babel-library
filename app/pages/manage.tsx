import React from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout';

import { Books } from '../components/manage/Books';
import { Locations } from '../components/manage/Locations';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Manage = () => {

    return <Layout>
        <Head>
            <title>Babel library</title>
            <meta name='robots' content='noindex,nofollow' />
        </Head>
        <Tabs>
            <TabList>
                <div className='tab__list mt-2'>
                    <Tab classID='tab_list_container'><button className='tab_list_container_button'>Ubicaciones</button></Tab>
                    <Tab classID='tab_list_container'><button className='tab_list_container_button'>Libros</button></Tab>
                </div>
            </TabList>
            <TabPanel>
                <Locations />
            </TabPanel>
            <TabPanel>
                <Books />
            </TabPanel>
        </Tabs>
    </Layout >
};

export default Manage;

