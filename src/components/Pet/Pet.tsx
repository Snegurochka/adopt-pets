import { FC, memo } from "react";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/selectors/user";
import useFavorite from "../../hooks/useFavorite";

import { IFavoriteAnimal, IPhotoAnimal } from "../../interfaces/interfaces";
import styles from "./Pet.module.css";

// components
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import PetInfo from "./PetInfo/PetInfo";

interface IProps {
  id: number;
  name: string;
  animal: string;
  breed: string;
  images: IPhotoAnimal[];
  favorite: IFavoriteAnimal | undefined;
}

const Pet: FC<IProps> = memo(
  ({ id, name, animal, breed, images, favorite }) => {
    const user = useSelector(selectCurrentUser);

    const [setFavoriteHandler, isFavorite] = useFavorite(id, name, favorite);
    return (
      <div className={styles.pet}>
        {user ? (
          <FavoriteBtn
            isFavorite={isFavorite}
            btnClass="list"
            callback={setFavoriteHandler}
          />
        ) : null}
        <PetInfo id={id} name={name} animal={animal} breed={breed} images={images} />
      </div>
    );
  }
);

export default Pet;
