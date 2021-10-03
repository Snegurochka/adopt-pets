import { Link } from "react-router-dom";
//import { IPet } from "../../interfaces/interfaces";
import styles from "./Pet.module.css";

//type Props = IPet & {location: string}
interface IProps {
  name: string;
  animal: string;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

const Pet: React.FC<IProps> = ({ id, name, animal, breed, images, location }) => {
  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0]
  }
  return (
    <Link to={`/details/${id}`} className={styles.pet}>
      <div className={styles.image}>
        <img data-testid="thumbnail" src={hero} alt={name} />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{`${animal} — ${breed} — ${location}`}</p>
      </div>
    </Link>
  );
};

export default Pet;
