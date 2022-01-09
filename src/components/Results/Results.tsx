import { useMemo } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";

// styles
//import styles from "./Results.module.css";

// components
import Pet from "../Pet/Pet";
import Card from "../UI/Card/Card";

interface IProps {
}

const Results: React.FC<IProps> = () => {
    const { animals, favorites } = useSelector((s: AppStateType) => s);

    const idsFavorites = useMemo(() => { return favorites.animals.map((item) => item.id) }, [favorites.animals]);

    return (
        <Card>
            {!animals.animals.length ? (<h2>No Pets</h2>) : (
                animals.animals.map((pet, ind) => (
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
