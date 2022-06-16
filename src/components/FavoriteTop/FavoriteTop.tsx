import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteAnimals } from "../../store/AC/favorites";
import { AppStateType } from "../../store/reducers";
import { selectFavoritesCount } from "../../store/selectors/favorites";

import styles from "./FavoriteTop.module.css";

const FavoriteTop: React.FC = () => {
    const FavoritesCount = useSelector(selectFavoritesCount);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFavoriteAnimals(1));
    }, [dispatch]);
    return (
        <div className={styles.wrapper}>
            <svg aria-hidden="true" data-icon="heart" width={40} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
            <div className={styles.count}>{FavoritesCount}</div>
        </div>
    )
}

export default FavoriteTop
