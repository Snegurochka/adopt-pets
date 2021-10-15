import { useEffect, useState } from "react";
import useBreedList from "../../hooks/useBreedList";
import API from "../../API";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";
import setAccessToken from '../../store/AC/accessToken';
import setAnimals from '../../store/AC/animals';
import changeAnimal from '../../store/AC/animal';
import changeLocation from '../../store/AC/location';
import changeBreed from '../../store/AC/breed';
import changeTheme from '../../store/AC/theme';

// types
import { PetAPIResponse } from "../../interfaces/APIinterfases";
import { AnimalTypes, IAnimal } from "../../interfaces/interfaces";

//styles
import styles from "./SearchParams.module.css";
// components
import Results from "../Results/Results";
import Button from "../UI/Button/Button";


const ANIMALS: AnimalTypes[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams: React.FC = () => {
  const { animal, breed, location, theme } = useSelector((s: AppStateType) => s);
  const [breeds] = useBreedList(animal);

  const dispatch = useDispatch();

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const accessToken = (await API.oauthToken());
    const animals = await API.fetchAnimals('', 1, accessToken.access_token);

    dispatch(setAccessToken(accessToken));
    dispatch(setAnimals(animals));
  }

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    requestPets();
  }

  const animalChangeHandler = (value: AnimalTypes) => {
    dispatch(changeBreed(''));
    dispatch(changeAnimal(value as AnimalTypes))
  }

  return (
    <div className={styles.wrapper}>
      {/* <form onSubmit={submitHandler}>
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
            value={animal}
            onChange={(e) => animalChangeHandler(e.target.value as AnimalTypes)}
            onBlur={(e) => animalChangeHandler(e.target.value as AnimalTypes)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
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
      </form> */}
      <Results />
    </div>
  );
};

export default SearchParams;
