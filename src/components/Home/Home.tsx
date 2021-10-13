import React from "react";
import styles from "./Home.module.css";

// Components
import Intro from '../Intro/Intro';
import SearchParams from '../SearchParams/SearchParams';
import SliderBig from '../SliderBig/SliderBig';

const Home: React.FC = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Intro />
            </div>
            <SearchParams />
            <SliderBig />
        </>
    )
}

export default Home;