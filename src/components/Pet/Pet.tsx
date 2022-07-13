import { memo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/selectors/user";
import { IPhotoAnimal } from "../../interfaces/interfaces";
import styles from "./Pet.module.css";
import noneImg from '../../img/none.png';

// components
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";


//type Props = IPet & {location: string}
interface IProps {
  name: string;
  animal: string;
  breed: string;
  images: IPhotoAnimal[];
  id: number;
  isFavorite: boolean;
}

const Pet: React.FC<IProps> = memo(({ id, name, animal, breed, images, isFavorite }) => {
  const user = useSelector(selectCurrentUser);
  return (
    <div className={styles.pet}>
      <div className={styles.image}>
        <Link to={`/details/${id}`}>
          <img data-testid="thumbnail" src={
            images.length
              ? images[0].small
              : noneImg} alt={name} />
        </Link>
      </div>
      <div className={styles.info}>
        {user
          ? <FavoriteBtn id={id} name={name} isFavorite={isFavorite} btnClass="list"/>
          : null}
        <Link to={`/details/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{`${animal} — ${breed}`}</p>
      </div>
    </div>
  );
});

export default Pet;
