// styles
import styles from "./Results.module.css";

// components
import Pet from "../Pet/Pet";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";

interface IProps {
}

const Results: React.FC<IProps> = () => {
    const { animals } = useSelector((s: AppStateType) => s);

    console.log(animals);


    return (
        <div className={styles.wrapp}>
            {!animals.animals.length ? (<h2>No Pets</h2>) : (
                animals.animals.map((pet, ind) => (
                    <Pet
                        key={`${ind}-${pet.id}`}
                        id={pet.id}
                        name={pet.name}
                        animal={pet.type}
                        breed={pet.breeds.primary}
                        images={pet.photos}
                    />
                ))
            )}
        </div>
    );
};

export default Results;
