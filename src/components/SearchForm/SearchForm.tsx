import { memo, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useBreedList from "../../hooks/useBreedList";
import API from "../../API";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";
import setAnimals from '../../store/AC/animals';
import { changeAnimal, setAnimalTypes } from '../../store/AC/animal';
import changeLocation from '../../store/AC/location';
import changeBreed from '../../store/AC/breed';

//styles
import styles from "./SearchParams.module.css";
// components

import Button from "../UI/Button/Button";


const SearchForm = memo(() => {
    const { animal, breed, location, accessToken } = useSelector((s: AppStateType) => s);
    const [breeds] = useBreedList(animal.currentAnimal);
    const history = useHistory();
    const locationParams = useLocation();
    const dispatch = useDispatch();

    const queryParams = new URLSearchParams(locationParams.search);
    const animalQuery = queryParams.get('animal');

    useEffect(() => {
        if (accessToken.access_token.length) {
            requestAnimalTypes();
        }
        async function requestAnimalTypes() {
            const res = await API.fetchAnimalTypes(accessToken.access_token);

            dispatch(setAnimalTypes(res.types));
        }
    }, [accessToken.access_token]); // eslint-disable-line react-hooks/exhaustive-deps

    if (animalQuery && (animal.currentAnimal !== animalQuery)) {
        dispatch(changeAnimal(animalQuery as string));
    }

    useEffect(() => {
        if (accessToken.access_token.length) {
            requestPets();
        }
    }, [accessToken.access_token, animal]); // eslint-disable-line react-hooks/exhaustive-deps
    async function requestPets() {
        let query = '';
        if (animal.currentAnimal.length) {
            query = `?type=${animal.currentAnimal.charAt(0).toLowerCase() + animal.currentAnimal.slice(1)}`;
            if (breed) {
                query += `&breed=${breed}`;
            }
        }
        const animals = await API.fetchAnimals(query, 1, accessToken.access_token);
        dispatch(setAnimals(animals));
    }

    const animalChangeHandler = (value: string) => {
        if (animalQuery !== value) {
            history.push(`/?animal=${value}`);
        }

        dispatch(changeBreed(''));
        dispatch(changeAnimal(value as string));
    }

    const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        requestPets();
    }
    return (
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
    )
});

export default SearchForm