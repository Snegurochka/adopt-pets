import { Link } from "react-router-dom";
import { IPhotoAnimal } from "../../interfaces/interfaces";
//import { IPet } from "../../interfaces/interfaces";
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

const Pet: React.FC<IProps> = ({ id, name, animal, breed, images, isFavorite }) => {
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
        <FavoriteBtn id={id} name={name} isFavorite={isFavorite} />
        <Link to={`/details/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{`${animal} — ${breed}`}</p>
      </div>
    </div>
  );
};

export default Pet;
