import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
//import ThemeContext from "../../context/ThemeContext";
import styles from "./Details.module.css";

import { IAnimal } from "../../interfaces/interfaces";

// components
import Carousel from "../Carousel/Carousel";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Modal from "../Modal/Modal";
import Spinner from "../Spinner/Spinner";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";
import API from "../../API";


const Details: React.FC = () => {
    const { accessToken } = useSelector((s: AppStateType) => s);
    const [loading, setLoading] = useState(true);
    const [petInfo, setPetInfo] = useState({} as IAnimal);
    const [showModal, setShowModal] = useState(false);
    const { petId } = useParams<{ petId: string }>();

    useEffect(() => {
        const requestDetails = async () => {
            const res = await API.fetchDetails(+petId, accessToken.access_token);
            setLoading(false);
            setPetInfo(res.animal);
        }
        requestDetails();
    }, [petId]);// eslint-disable-line react-hooks/exhaustive-deps

    const adopt = () => {
        console.log('ok adopted');
        setShowModal(!showModal)
    }

    const { type, breeds, description, name, photos } = petInfo;
    return (
        <>
            {loading ? <Spinner /> : (
                <div className={styles.details}>
                    <Carousel images={photos} />
                    <div>
                        <h1>{name}</h1>
                        <h2>{`${type} — ${breeds?.primary}`}</h2>
                        <Button
                            onClick={() => { setShowModal(!showModal) }}
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
