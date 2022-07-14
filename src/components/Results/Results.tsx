import { FC } from "react";
import { useSelector } from "react-redux";
import { selectAnimals, selectAnimalsIsLoading } from "../../store/selectors/animals";
import { selectFavoritesIds } from "../../store/selectors/favorites";

// components
import Pet from "../Pet/Pet";
import Spinner from "../Spinner/Spinner";
import Card from "../UI/Card/Card";

const Results: FC = () => {
    const animals = useSelector(selectAnimals);
    const isLoading = useSelector(selectAnimalsIsLoading);
    const idsFavorites = useSelector(selectFavoritesIds);

    if (isLoading) return (
        <Card>
            <Spinner />
        </Card>);

    return (
        <Card>
            {!animals.length ? (<h2>No Pets</h2>) : (
                animals.map((pet, ind) => (
                    <Pet
                        key={`${ind}-${pet.id}`}
                        id={pet.id}
                        name={pet.name}
                        animal={pet.type}
                        breed={pet.breeds.primary}
                        images={pet.photos}
                        isFavorite={idsFavorites.includes(pet.id)}
                    />
                ))
            )}
        </Card>
    );
};

export default Results;
