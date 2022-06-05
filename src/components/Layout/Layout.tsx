import React from 'react';
import styles from './Layout.module.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

interface PropsType {
    header?: string,
    classPage?: string,
    typeContent?: 'page'
}

const Layout: React.FC<PropsType> = ({ header, classPage, typeContent, children }) => {
    return (<>
        <Header />
        <main className={classPage} >
            <section className={typeContent ? styles.wrapper : ''}>
                {typeContent && header
                    ? <h1>{header}</h1>
                    : null}
                {children}
            </section>
        </main>
        <Footer />
    </>
    )
}

export default Layout;