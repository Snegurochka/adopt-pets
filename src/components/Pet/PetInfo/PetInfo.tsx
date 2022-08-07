import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { IPhotoAnimal } from "../../../interfaces/interfaces";

import noneImg from "../../../img/none.png";
import { AppRoute } from "../../../const";
import styles from "./PetInfo.module.css";

interface IProps {
    id: number;
    name: string;
    animal: string;
    breed: string;
    images: IPhotoAnimal[];
  }

const PetInfo:FC<IProps> = memo(({id, name, animal, breed, images}) => {
  return (
    <>
      <div className={styles.image}>
        <Link to={`${AppRoute.DETAILS_INDEX}${id}`}>
          <img
            data-testid="thumbnail"
            src={images.length ? images[0].small : noneImg}
            width="100"
            alt={name}
          />
        </Link>
      </div>
      <div className={styles.info}>
        <Link to={`${AppRoute.DETAILS_INDEX}${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{`${animal} — ${breed}`}</p>
      </div>
    </>
  );
});

export default PetInfo;
