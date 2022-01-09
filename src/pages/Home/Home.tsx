import React from "react";
import styles from "./Home.module.css";

// Components
import Intro from '../../components/Intro/Intro';
import SearchParams from '../../components/SearchParams/SearchParams';
import SliderBig from '../../components/SliderBig/SliderBig';

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