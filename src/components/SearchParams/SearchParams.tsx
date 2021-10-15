import { useEffect } from "react";
import useBreedList from "../../hooks/useBreedList";
import API from "../../API";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";
import setAccessToken from '../../store/AC/accessToken';
import setAnimals from '../../store/AC/animals';
import { changeAnimal, setAnimalTypes } from '../../store/AC/animal';
import changeLocation from '../../store/AC/location';
import changeBreed from '../../store/AC/breed';

//styles
import styles from "./SearchParams.module.css";
// components
import Results from "../Results/Results";
import Button from "../UI/Button/Button";

const SearchParams: React.FC = () => {
  const { animal, breed, location, accessToken } = useSelector((s: AppStateType) => s);
  const [breeds] = useBreedList(animal.currentAnimal);

  const dispatch = useDispatch();

  useEffect(() => {
    getAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken.access_token.length) {
      requestAnimalTypes();
    }
  }, [accessToken.access_token]);

  useEffect(() => {
    if (accessToken.access_token.length) {
      requestPets();
    }
  }, [accessToken.access_token, animal]);

  async function getAccessToken() {
    const newToken = (await API.oauthToken());
    dispatch(setAccessToken(newToken));
  }

  async function requestPets() {
    let query = '';
    if (animal.currentAnimal.length) {
      query = `?type=${animal.currentAnimal.charAt(0).toLowerCase() + animal.currentAnimal.slice(1)}`;
    }
    const animals = await API.fetchAnimals(query, 1, accessToken.access_token);
    dispatch(setAnimals(animals));
  }

  async function requestAnimalTypes() {
    const res = await API.fetchAnimalTypes(accessToken.access_token);

    dispatch(setAnimalTypes(res.types));
  }

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    requestPets();
  }

  const animalChangeHandler = (value: string) => {
    dispatch(changeBreed(''));
    dispatch(changeAnimal(value as string))
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={submitHandler}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => dispatch(changeLocation(e.target.value))}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal.currentAnimal}
            onChange={(e) => animalChangeHandler(e.target.value as string)}
            onBlur={(e) => animalChangeHandler(e.target.value as string)}
          >
            <option />
            {animal.animalTypes.map((animal) => (
              <option key={animal.name} value={animal.name}>
                {animal.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => dispatch(changeBreed(e.target.value))}
            onBlur={(e) => dispatch(changeBreed(e.target.value))}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <Button appearance='primary' >Submit</Button>
      </form>
      <Results />
    </div>
  );
};

export default SearchParams;
