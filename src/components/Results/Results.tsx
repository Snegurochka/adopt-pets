// styles
import styles from "./Results.module.css";
// types
import { IPet } from "../../interfaces/interfaces";
// components
import Pet from "../Pet/Pet";

interface IProps {
    pets:  IPet[]
}

const Results: React.FC<IProps> = ({ pets }) => {
    return (
        <div className={styles.wrapp}>
            {!pets.length ? (<h2>No Pets</h2>) : (
                pets.map((pet) => (
                    <Pet
                        key={pet.id}
                        id={pet.id}
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}

                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                    />
                ))
            )}
        </div>
    );
};

export default Results;
