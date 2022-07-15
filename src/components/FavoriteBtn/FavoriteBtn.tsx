import { FC } from "react";

import styles from "./FavoriteBtn.module.css";
import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';
import { ReactComponent as FavoriteBorderIcon } from '../../assets/favorite-border-icon.svg';

interface IProps {
    isFavorite: boolean;
    callback: () => void;
    btnClass?: string;
}

const FavoriteBtn: FC<IProps> = ({isFavorite, callback, btnClass}) => {
    const classPosition = btnClass === 'list' ? styles.list : styles.detail;

    return (
        <div className={styles.favorite_icon + ' ' + classPosition} onClick={callback}>
            {!isFavorite
                ? <FavoriteBorderIcon />
                : <FavoriteIcon />
            }
        </div>
    )
}

export default FavoriteBtn
