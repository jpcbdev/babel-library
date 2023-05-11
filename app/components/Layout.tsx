import React from 'react';
import { Navigation } from './layout/Navigation';
import { Footer } from './layout/Footer';

export const Layout = (props) => {
    return <>
        <Navigation />
        <main>{props.children}</main>
        <Footer />
    </>
}