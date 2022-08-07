import { FC } from "react";
import { useSelector } from "react-redux";
import { selectFavoritesAnimals } from "../../store/selectors/favorites";

import ContentWrapper from "../../components/Layout/ContentWrapper/ContentWrapper";

const FavoritesPage: FC = () => {
  const animals = useSelector(selectFavoritesAnimals);
  return (
    <ContentWrapper header="Favorites">
      {animals.map((animal) => (
        <div key={animal.id}>{animal.name}</div>
      ))}
    </ContentWrapper>
  );
};

export default FavoritesPage;
