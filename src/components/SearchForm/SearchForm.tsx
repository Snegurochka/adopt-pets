import { ChangeEvent, FC, FormEvent, memo, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useBreedList from "../../hooks/useBreedList";
import API from "../../API";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";
import { fetchAnimals } from '../../store/AC/animals';
import { changeAnimal, setAnimalTypes } from '../../store/AC/animal';
import changeLocation from '../../store/AC/location';
import changeBreed from '../../store/AC/breed';
import { selectAccessToken } from "../../store/selectors/accessToken";

//styles
import styles from "./SearchForm.module.css";
// components

import Button from "../UI/Button/Button";
import { selectFormAnimal, selectFormAnimalTypes } from "../../store/selectors/animal";
import FormSearchInput from "../UI/FormSearchInput/FormSearchInput";
import FormSelect from "../UI/FormSelect/FormSelect";


const SearchForm: FC = memo(() => {
    const { breed, location } = useSelector((s: AppStateType) => s);
    const animal = useSelector(selectFormAnimal);
    const animalOptions = useSelector(selectFormAnimalTypes);
    const accessToken = useSelector(selectAccessToken);
    const [breeds] = useBreedList(animal.currentAnimal);

    const history = useHistory();
    const locationParams = useLocation();
    const dispatch = useDispatch();

    const queryParams = new URLSearchParams(locationParams.search);
    const animalQuery = queryParams.get('animal');

    useEffect(() => {
        if (accessToken.length) {
            requestAnimalTypes();
        }
        async function requestAnimalTypes() {
            const res = await API.fetchAnimalTypes(accessToken);

            dispatch(setAnimalTypes(res.types));
        }
    }, [accessToken, dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

    if (animalQuery && (animal.currentAnimal !== animalQuery)) {
        dispatch(changeAnimal(animalQuery as string));
    }

    useEffect(() => {
        if (accessToken.length) {
            dispatch(fetchAnimals(accessToken, animal.currentAnimal, breed));
        }
    }, [accessToken, animal.currentAnimal, breed, dispatch]);


    const animalChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        if (animalQuery !== value) {
            history.push(`/?animal=${value}`);
        }
        dispatch(changeBreed(''));
        dispatch(changeAnimal(value));
    }

    const breedCangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeBreed(e.target.value));
    }

    const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        //requestPets();
    }

    const locationChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeLocation(e.target.value));
    }

    return (
        <form className={styles.wrapper_form} onSubmit={submitHandler}>
            <FormSearchInput
                id="location"
                label="Location"
                value={location}
                onChange={locationChangeHandler} />
            <FormSelect
                id="animal"
                label="Animal"
                value={animal.currentAnimal}
                options={animalOptions}
                onChange={animalChangeHandler}
                onBlur={animalChangeHandler} />
            <FormSelect
                id="breed"
                label="Breed"
                value={breed}
                options={breeds}
                disabled={!breeds.length}
                onChange={breedCangeHandler}
                onBlur={breedCangeHandler} />
            <Button appearance='primary' >Submit</Button>
        </form>
    )
});

export default SearchForm