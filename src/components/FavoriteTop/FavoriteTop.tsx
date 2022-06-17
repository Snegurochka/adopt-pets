import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteAnimals } from "../../store/AC/favorites";
import { selectFavoritesCount } from "../../store/selectors/favorites";

import styles from "./FavoriteTop.module.css";
import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';

const FavoriteTop: React.FC = () => {
    const FavoritesCount = useSelector(selectFavoritesCount);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFavoriteAnimals(1));
    }, [dispatch]);
    return (
        <div className={styles.wrapper}>
            <FavoriteIcon />
            <div className={styles.count}>{FavoritesCount}</div>
        </div>
    )
}

export default FavoriteTop
