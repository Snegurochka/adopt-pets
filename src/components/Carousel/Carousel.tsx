import { useState } from "react";
import styles from "./Carousel.module.css";

interface IProps {
    images: string[]
}

const Carousel: React.FC<IProps> = ({ images }) => {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.carousel}>
            {images ? (
                <>
                    <img src={images[active]} alt="animal" data-testid="thumbnail" />
                    <div className={styles.carousel_smaller}>
                        {images.map((photo, index) => (
                            <img
                                key={photo}
                                src={photo}
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
            ) : (
                <img src="http://pets-images.dev-apis.com/pets/none.jpg" alt="animal" />
            )}
        </div>
    );
};

export default Carousel;