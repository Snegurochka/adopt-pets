import { useEffect, useMemo, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";
import API from "../../API";

//import ThemeContext from "../../context/ThemeContext";
import styles from "./Details.module.css";

import { IAnimal } from "../../interfaces/interfaces";

// components
import Carousel from "../Carousel/Carousel";
import Comments from "../Comments/Comments";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Modal from "../Modal/Modal";
import Spinner from "../Spinner/Spinner";
import Button from "../UI/Button/Button";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";


const Details: React.FC = () => {
    const { accessToken, favorites } = useSelector((s: AppStateType) => s);
    const { isLoggin } = useSelector((s: AppStateType) => s.auth);
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
    }, [petId, accessToken.access_token]);// eslint-disable-line react-hooks/exhaustive-deps

    const adopt = () => {
        console.log('ok adopted');
        setShowModal(!showModal)
    }

    const { id, type, breeds, description, name, photos } = petInfo;
    const idsFavorites = useMemo(() => { return favorites.animals.map((item) => item.id) }, [favorites.animals]);
    return (
        <>
            {loading ? <Spinner /> : (
                <div className={styles.details}>
                    {isLoggin
                        ? <FavoriteBtn id={id} name={name} isFavorite={idsFavorites.includes(id)} />
                        : null}
                    {photos && <Carousel images={photos} />}
                    <div>
                        <h1>{name}</h1>
                        <h2>{`${type} — ${breeds?.primary}`}</h2>
                        <div className={styles.addopt_wrapp}>
                            {isLoggin ? (
                                <Button onClick={() => { setShowModal(!showModal) }}>
                                    Adopt {name}
                                </Button>
                            ) : (<span>If you want to adopt this pet, please log in</span>)}
                        </div>
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
                    {isLoggin
                        ? (<Comments />)
                        : null}
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
