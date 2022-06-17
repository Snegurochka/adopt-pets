import { useDispatch } from "react-redux";

import { removeFavoriteAnimal, setFavoriteAnimal } from '../../store/AC/favorites';

import styles from "./FavoriteBtn.module.css";
import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';
import { ReactComponent as FavoriteBorderIcon } from '../../assets/favorite-border-icon.svg';

interface IProps {
    id: number;
    name: string;
    isFavorite: boolean;
    btnClass?: string;
}

const FavoriteBtn: React.FC<IProps> = (props) => {
    const dispatch = useDispatch();

    const classPosition = props.btnClass === 'list' ? styles.list : styles.detail;

    const setFavoriteHandler = () => {
        if (props.isFavorite) {
            dispatch(removeFavoriteAnimal(props.id));
        } else {
            dispatch(setFavoriteAnimal({
                id: props.id,
                name: props.name
            }));
        }

    }

    return (
        <div className={styles.favorite_icon + ' ' + classPosition} onClick={setFavoriteHandler}>
            {!props.isFavorite
                ? <FavoriteBorderIcon />
                : <FavoriteIcon />
            }
        </div>
    )
}

export default FavoriteBtn
