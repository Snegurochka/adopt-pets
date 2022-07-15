import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectFavoritesCount } from "../../store/selectors/favorites";

import { AppRoute } from '../../const';
import styles from "./FavoriteTop.module.css";
import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';

const FavoriteTop: FC = () => {
    const favoritesCount = useSelector(selectFavoritesCount);

    return (
        <Link to={AppRoute.FAVORITES} className={styles.wrapper}>
            <FavoriteIcon />
            <div className={styles.count}>{favoritesCount}</div>
        </Link>
    )
}

export default FavoriteTop
