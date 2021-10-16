import { useState } from "react";
import { IPhotoAnimal } from "../../interfaces/interfaces";
import styles from "./Carousel.module.css";
import noneImg from '../../img/none.png';

interface IProps {
    images: IPhotoAnimal[]
}

const Carousel: React.FC<IProps> = ({ images }) => {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.carousel}>
            {images.length
                ? (
                    <>
                        {images[active]
                            ? <img src={images[active].large} alt="animal" data-testid="thumbnail" />
                            : <img src={noneImg} alt="animal" data-testid="thumbnail" />}

                        <div className={styles.carousel_smaller}>
                            {images.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo.small}
                                    data-index={index}
                                    data-testid={`thumbnail${index}`}
                                    onClick={(evt) => {
                                        if (evt.currentTarget.dataset.index)
                                            setActive(+evt.currentTarget.dataset.index)
                                    }}
                                    className={index === active ? styles.active : ""}
                                    alt="animal thumbnail"
                                />
                            ))}
                        </div>
                    </>
                )
                : (
                    <img src={noneImg} alt="animal" />
                )}
        </div>
    );
};

export default Carousel;