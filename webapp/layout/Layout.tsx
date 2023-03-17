import {LayoutProps} from './Layout.props';
import {Header} from './Header/Header';
import React, {FunctionComponent} from 'react';
import {Footer} from './Footer/Footer';

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
