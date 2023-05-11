import React from 'react';
import { Navigation } from './layout/Navigation';
import { Footer } from './layout/Footer';

import { Fragment } from 'react';

export const Layout = (props) => {
    return <Fragment>
        <Navigation />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
}