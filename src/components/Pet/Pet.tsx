import { Link } from "react-router-dom";
import { IPhotoAnimal } from "../../interfaces/interfaces";
//import { IPet } from "../../interfaces/interfaces";
import styles from "./Pet.module.css";

//type Props = IPet & {location: string}
interface IProps {
  name: string;
  animal: string;
  breed: string;
  images: IPhotoAnimal[];
  id: number;
}

const Pet: React.FC<IProps> = ({ id, name, animal, breed, images }) => {
  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0].small;
  }
  return (
    <Link to={`/details/${id}`} className={styles.pet}>
      <div className={styles.image}>
        <img data-testid="thumbnail" src={hero} alt={name} />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{`${animal} — ${breed}`}</p>
      </div>
    </Link>
  );
};

export default Pet;
