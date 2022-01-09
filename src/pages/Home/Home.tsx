import React from "react";
import styles from "./Home.module.css";

// Components
import Intro from '../../components/Intro/Intro';
import SearchParams from '../../components/SearchParams/SearchParams';
import SliderBig from '../../components/SliderBig/SliderBig';
import Layout from "../../components/Layout/Layout";

const Home: React.FC = () => {
    return (
        <Layout >
            <div className={styles.wrapper}>
                <Intro />
            </div>
            <SearchParams />
            <SliderBig />
        </Layout>
    )
}

export default Home;