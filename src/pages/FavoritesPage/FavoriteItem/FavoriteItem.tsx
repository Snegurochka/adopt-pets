import { FC } from "react";
import { IFavoriteAnimal } from "../../../interfaces/interfaces";
import styles from "./FavoriteItem.module.css";

import Button from "../../../components/UI/Button/Button";
import { removeFavoriteAnimal } from "../../../store/AC/favorites";
import { useDispatch } from "react-redux";

interface IProps {
  animal: IFavoriteAnimal;
}

const FavoriteItem: FC<IProps> = ({ animal }) => {
  const dispatch = useDispatch();

  const removeFavoriteHandler = () => {
    dispatch(removeFavoriteAnimal(animal.refId));
  };

  return (
    <tr className={styles.wrapper}>
      <td>{animal.name}</td>
      <td>
        <Button callback={removeFavoriteHandler}>Remove</Button>
      </td>
    </tr>
  );
};

export default FavoriteItem;
