import React from "react";
import styles from "./Home.module.css";
// Components
import Intro from '../Intro/Intro';
import SearchParams from '../SearchParams/SearchParams';

const Home: React.FC = () => {

    return (
        <>
        <div className={styles.wrapper}>
            <Intro />
            </div>
            <SearchParams />
</>
    )
}

export default Home;