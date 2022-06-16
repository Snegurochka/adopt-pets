import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import API from "../../API";
import { getCommentsByPetFromAPI } from "../../utils/firebase.utils";
import setComments from "../../store/AC/comments";
import { AppStateType } from "../../store/reducers";
import { selectFavoritesIds } from "../../store/selectors/favorites";

import styles from "./Details.module.css";

import { IAnimal, IComment } from "../../interfaces/interfaces";

// components
import Carousel from "../../components/Carousel/Carousel";
import Comments from "../../components/Comments/Comments";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Modal from "../../components/Modal/Modal";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";
import FavoriteBtn from "../../components/FavoriteBtn/FavoriteBtn";
import Layout from "../../components/Layout/Layout";


const Details: React.FC = () => {
    const { accessToken } = useSelector((s: AppStateType) => s);
    const { user } = useSelector((s: AppStateType) => s.user);
    const idsFavorites = useSelector(selectFavoritesIds);
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

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchComments = async () => {
            const comments = await getCommentsByPetFromAPI(petId) as IComment[];
            dispatch(setComments(comments));
        }
        fetchComments();
    }, [petId, dispatch]);

    const adopt = () => {
        console.log('ok adopted');
        setShowModal(!showModal)
    }

    const { id, type, breeds, description, name, photos } = petInfo;
    //const idsFavorites = useMemo(() => { return favorites.animals.map((item) => item.id) }, [favorites.animals]);
    return (
        <Layout typeContent="page" >
            {loading ? <Spinner /> : (
                <>
                    {user
                        ? <FavoriteBtn id={id} name={name} isFavorite={idsFavorites.includes(id)} />
                        : null}
                    {photos && <Carousel images={photos} />}
                    <div>
                        <h1>{name}</h1>
                        <h2>{`${type} — ${breeds?.primary}`}</h2>
                        <div className={styles.addopt_wrapp}>
                            {user ? (
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
                    {user
                        ? (<Comments uid={user.uid} />)
                        : null}
                </>
            )}
        </Layout>
    );
};

export default function DetailsErrorBoundary() {
    return (
        <ErrorBoundary>
            <Details />
        </ErrorBoundary>
    );
}
