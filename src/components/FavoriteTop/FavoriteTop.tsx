import { FC } from "react";
import { useSelector } from "react-redux";
import { selectFavoritesCount } from "../../store/selectors/favorites";

import styles from "./FavoriteTop.module.css";
import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';

const FavoriteTop: FC = () => {
    const favoritesCount = useSelector(selectFavoritesCount);

    return (
        <div className={styles.wrapper}>
            <FavoriteIcon />
            <div className={styles.count}>{favoritesCount}</div>
        </div>
    )
}

export default FavoriteTop
