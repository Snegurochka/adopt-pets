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
}

const Pet: React.FC<IProps> = ({ id, name, animal, breed, images }) => {
  return (
    <Link to={`/details/${id}`} className={styles.pet}>
      <div className={styles.image}>
        <img data-testid="thumbnail" src={
          images.length
            ? images[0].small
            : noneImg} alt={name} />
      </div>
      <div className={styles.info}>
        <FavoriteBtn />
        <h3>{name}</h3>
        <p>{`${animal} — ${breed}`}</p>
      </div>
    </Link>
  );
};

export default Pet;
