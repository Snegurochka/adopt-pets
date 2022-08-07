import { useDispatch, useSelector } from "react-redux";
import { IFavoriteAnimal } from "../interfaces/interfaces";
import { removeFavoriteAnimal, setFavoriteAnimal } from "../store/AC/favorites";
import { selectCurrentUser } from "../store/selectors/user";

export default function useFavorite(
  id: number,
  name: string,
  favorite: IFavoriteAnimal | undefined
): [() => void, boolean] {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const isFavorite = Boolean(favorite?.id);
  const refId = favorite?.refId;

  const setFavoriteHandler = () => {
    if (!user) return;

    if (isFavorite) {
      if (!refId) return;
      dispatch(removeFavoriteAnimal(refId));
    } else {
      dispatch(
        setFavoriteAnimal({
          uid: user.uid,
          id: id,
          name: name,
        })
      );
    }
  };
  return [setFavoriteHandler, isFavorite];
}
