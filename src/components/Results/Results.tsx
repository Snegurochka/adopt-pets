import { FC } from "react";
import { useSelector } from "react-redux";
import { selectAnimals, selectAnimalsIsLoading } from "../../store/selectors/animals";
import { selectFavoritesAnimals, selectFavoritesIds } from "../../store/selectors/favorites";

// components
import Pet from "../Pet/Pet";
import Spinner from "../Spinner/Spinner";
import Card from "../UI/Card/Card";

const Results: FC = () => {
    const animals = useSelector(selectAnimals);
    const isLoading = useSelector(selectAnimalsIsLoading);
    const favorites = useSelector(selectFavoritesAnimals);
    const idsFavorites = useSelector(selectFavoritesIds);



    if (isLoading) return (
        <Card>
            <Spinner />
        </Card>);

    return (
        <Card>
            {!animals.length ? (<h2>No Pets</h2>) : (
                animals.map((pet, ind) => {
                    const favorite = favorites.find((item) => item.id === pet.id);

                    return <Pet
                        key={`${ind}-${pet.id}`}
                        id={pet.id}
                        refId={favorite?.refId || null}
                        name={pet.name}
                        animal={pet.type}
                        breed={pet.breeds.primary}
                        images={pet.photos}
                        isFavorite={Boolean(favorite?.id)}
                    />
                }
                )
            )}
        </Card>
    );
};

export default Results;
