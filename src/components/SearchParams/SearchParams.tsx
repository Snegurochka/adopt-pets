//s tyles
import styles from "./SearchParams.module.css";

import { useEffect, useState } from "react";
import useBreedList from "../../hooks/useBreedList";
// types
import { Animal, PetAPIResponse } from "../../interfaces/APIinterfases";
import { IPet } from "../../interfaces/interfaces";
// components
import Results from "../Results/Results";
import Button from "../UI/Button/Button";

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams: React.FC = () => {
  const [animal, updateAnimal] = useState("" as Animal);
  const [location, updateLocation] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([] as IPet[]);
  const [breeds] = useBreedList(animal);
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = (await res.json()) as PetAPIResponse;

    // server doesn't have https, so I should use it
    const resultPets = json.pets;
    resultPets.forEach((pet, ind) => {
      pet.images.forEach((img, ind_i) => {
        resultPets[ind]['images'][ind_i] = img.replace('http', 'https');
      })
    })

    setPets(json.pets);
  }

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    requestPets();
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
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value as Animal)}
            onBlur={(e) => updateAnimal(e.target.value as Animal)}
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
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
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
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
