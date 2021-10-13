import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderBig.module.css";

import Slide1 from '../../img/slide1.jpg';
import Slide2 from '../../img/slide2.jpg';

const SliderBig: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className={styles.wrapper}>
            <Slider {...settings}>
                <div>
                    <img src={Slide1} alt="1" />
                </div>
                <div>
                    <img src={Slide2} alt="2" />
                </div>
            </Slider>
        </section>
    )
}

export default SliderBig;