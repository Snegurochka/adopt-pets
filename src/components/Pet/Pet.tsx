import { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/selectors/user";
import { removeFavoriteAnimal, setFavoriteAnimal } from "../../store/AC/favorites";
import { IPhotoAnimal } from "../../interfaces/interfaces";
import styles from "./Pet.module.css";
import noneImg from '../../img/none.png';

// components
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import { AppRoute } from "../../const";


interface IProps {
  name: string;
  refId: string | null;
  animal: string;
  breed: string;
  images: IPhotoAnimal[];
  id: number;
  isFavorite: boolean;
}

const Pet: React.FC<IProps> = memo(({ id, refId, name, animal, breed, images, isFavorite }) => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const setFavoriteHandler = () => {
    if (!user) return;

    if (isFavorite) {
      if (!refId) return;
      dispatch(removeFavoriteAnimal(refId));
    } else {
      dispatch(setFavoriteAnimal({
        uid: user.uid,
        id: id,
        name: name
      }));
    }
  }
  return (
    <div className={styles.pet}>
      <div className={styles.image}>
        <Link to={`${AppRoute.DETAILS_INDEX}${id}`}>
          <img data-testid="thumbnail" src={
            images.length
              ? images[0].small
              : noneImg} alt={name} />
        </Link>
      </div>
      <div className={styles.info}>
        {user
          ? <FavoriteBtn isFavorite={isFavorite} btnClass="list" callback={setFavoriteHandler} />
          : null}
        <Link to={`${AppRoute.DETAILS_INDEX}${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{`${animal} — ${breed}`}</p>
      </div>
    </div>
  );
});

export default Pet;
