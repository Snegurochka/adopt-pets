import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../store/AC/comments";
import { selectFavoritesAnimals } from "../../store/selectors/favorites";
import { selectAccessToken } from "../../store/selectors/accessToken";
import { selectCurrentUser } from "../../store/selectors/user";
import { IAnimal } from "../../interfaces/interfaces";
import useFavorite from "../../hooks/useFavorite";
import API from "../../API";

// components
import Carousel from "../../components/Carousel/Carousel";
import Comments from "../../components/Comments/Comments";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

import Spinner from "../../components/Spinner/Spinner";
import FavoriteBtn from "../../components/FavoriteBtn/FavoriteBtn";
import ContentWrapper from "../../components/Layout/ContentWrapper/ContentWrapper";
import PetDetails from "../../components/PetDetails/PetDetails";

const Details: FC = () => {
  const accessToken = useSelector(selectAccessToken);
  const user = useSelector(selectCurrentUser);
  const favorites = useSelector(selectFavoritesAnimals);

  const { petId } = useParams<{ petId: string }>();

  const [loading, setLoading] = useState(true);
  const [petInfo, setPetInfo] = useState({} as IAnimal);

  useEffect(() => {
    const requestDetails = async () => {
      const res = await API.fetchDetails(+petId, accessToken);
      setLoading(false);
      setPetInfo(res.animal);
    };
    requestDetails();
  }, [petId, accessToken]); // eslint-disable-line react-hooks/exhaustive-deps

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(petId));
  }, [petId, dispatch]);

  const { id, name, photos } = petInfo;
  const favorite = favorites.find((item) => item.id === id);
  const [setFavoriteHandler, isFavorite] = useFavorite(id, name, favorite);

  return (
    <ContentWrapper>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {user ? (
            <FavoriteBtn
              isFavorite={isFavorite}
              callback={setFavoriteHandler}
            />
          ) : null}
          {photos && <Carousel images={photos} />}
          <PetDetails user={user} petInfo={petInfo} />
          <Comments />
        </>
      )}
    </ContentWrapper>
  );
};

export default function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}
