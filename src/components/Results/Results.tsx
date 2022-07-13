import { FC } from "react";
import { useSelector } from "react-redux";
import { selectAnimals } from "../../store/selectors/animals";
import { selectFavoritesIds } from "../../store/selectors/favorites";

// components
import Pet from "../Pet/Pet";
import Card from "../UI/Card/Card";

const Results: FC = () => {
    const animals = useSelector(selectAnimals);
    const idsFavorites = useSelector(selectFavoritesIds);

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
