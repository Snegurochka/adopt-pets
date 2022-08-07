import { FC } from "react";
import { useSelector } from "react-redux";
import { selectFavoritesAnimals } from "../../store/selectors/favorites";

import ContentWrapper from "../../components/Layout/ContentWrapper/ContentWrapper";
import FavoriteItem from "./FavoriteItem/FavoriteItem";

const FavoritesPage: FC = () => {
  const animals = useSelector(selectFavoritesAnimals);
  return (
    <ContentWrapper header="Favorites">
      <table>
        <tbody>
          {animals.map((animal) => (
            <FavoriteItem key={animal.id} animal={animal} />
          ))}
        </tbody>
      </table>
    </ContentWrapper>
  );
};

export default FavoritesPage;
