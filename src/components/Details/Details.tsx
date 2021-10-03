import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
//import ThemeContext from "../../context/ThemeContext";
import styles from "./Details.module.css";

import { IPet } from "../../interfaces/interfaces";

// components
import Carousel from "../Carousel/Carousel";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Modal from "../Modal/Modal";
import Spinner from "../Spinner/Spinner";
import Button from "../UI/Button/Button";


const Details: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [petInfo, setPetInfo] = useState({} as IPet);
    const [showModal, setShowModal] = useState(false);
    const { petId } = useParams<{petId: string}>();
    //const [theme] = useContext(ThemeContext);

    useEffect(() => {
        const requestDetails = async () => {
            const res = await fetch(
                `https://pets-v2.dev-apis.com/pets?id=${petId}`
            );
            const json = await res.json();
            setLoading(false);
            setPetInfo(json.pets[0]);
        }
        requestDetails();
    }, [petId]);

const adopt = () => {
    console.log('ok adopted');
    setShowModal(!showModal)
}

    const { animal, breed, city, state, description, name, images } = petInfo;
    return (
        <>
            {loading ? <Spinner /> : (
                <div className={styles.details}>
                    <Carousel images={images} />
                    <div>
                        <h1>{name}</h1>
                        <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
                        <Button
                            onClick={() => {setShowModal(!showModal)}}
                        >Adopt {name}</Button>
                        <p>{description}</p>
                        {
                            showModal ?
                                (<Modal>
                                    <div>
                                        <h1>Would you like to adopt {name}?</h1>
                                        <div className="buttons">
                                            <Button onClick={adopt}>Yes</Button>
                                            <Button onClick={() => setShowModal(!showModal)}>No</Button>
                                        </div>
                                    </div>
                                </Modal>) : null
                        }
                    </div>
                </div>
            )}

        </>
    );
};

export default function DetailsErrorBoundary() {
    return (
        <ErrorBoundary>
            <Details />
        </ErrorBoundary>
    );
}
