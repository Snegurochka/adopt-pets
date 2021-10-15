// styles
import styles from "./Results.module.css";
// types
import { IAnimal } from "../../interfaces/interfaces";
// components
import Pet from "../Pet/Pet";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";

interface IProps {
}

const Results: React.FC<IProps> = () => {
    const { animals } = useSelector((s: AppStateType) => s);
    return (
        <div className={styles.wrapp}>
            {!animals.animals.length ? (<h2>No Pets</h2>) : (
                animals.animals.map((pet) => (
                    <Pet
                        key={pet.id}
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
