import { ChangeEvent, FC, FormEvent, memo, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useBreedList from "../../hooks/useBreedList";
import API from "../../API";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimals } from '../../store/AC/animals';
import { changeAnimal, setAnimalTypes } from '../../store/AC/animal';
import changeLocation from '../../store/AC/location';
import changeBreed from '../../store/AC/breed';
import { selectAccessToken } from "../../store/selectors/accessToken";
import { selectLocation } from "../../store/selectors/location";
import { selectFormAnimal, selectFormAnimalTypes } from "../../store/selectors/animal";

//styles
import styles from "./SearchForm.module.css";

// components
import Button from "../UI/Button/Button";
import FormSearchInput from "../UI/FormSearchInput/FormSearchInput";
import FormSelect from "../UI/FormSelect/FormSelect";
import { selectBreed } from "../../store/selectors/breed";


const SearchForm: FC = memo(() => {
    const breed = useSelector(selectBreed);
    const location = useSelector(selectLocation);
    const animal = useSelector(selectFormAnimal);
    const animalOptions = useSelector(selectFormAnimalTypes);
    const accessToken = useSelector(selectAccessToken);
    const [breeds] = useBreedList(animal);

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

    if (animalQuery && (animal !== animalQuery)) {
        dispatch(changeAnimal(animalQuery as string));
    }

    useEffect(() => {
        if (accessToken.length) {
            dispatch(fetchAnimals(accessToken, animal, breed, location));
        }
    }, [accessToken, animal, breed, location, dispatch]);

    const locationChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeLocation(e.target.value));
    }

    const animalChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        dispatch(changeBreed(''));
        dispatch(changeAnimal(value));
    }

    const breedCangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeBreed(e.target.value));
    }

    const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        dispatch(fetchAnimals(accessToken, animal, breed, location));
        if (animalQuery !== animal) {
            history.push(`/?animal=${animal}`);
        }
    }

    return (
        <form className={styles.wrapper_form} onSubmit={submitHandler}>
            <FormSearchInput
                id="location"
                label="Location (Zip or State)"
                value={location}
                onChange={locationChangeHandler} />
            <FormSelect
                id="animal"
                label="Animal"
                value={animal}
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