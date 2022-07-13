import { Dispatch } from "react";
import { PetAPIResponse } from "../../interfaces/APIinterfases";
import { IAnimalsAction, ThunkActionAnimalsResult } from "./../reducers/actionsInterfaces";
import { ANIMALS_ACTION_TYPES } from '../actionsTypes';
import API from "../../API";

export const setAnimals = (animals: PetAPIResponse) => ({
    type: ANIMALS_ACTION_TYPES.SET_ANIMALS,
    payload: animals
} as const);

export const isLoadingAnimals = (payload: boolean) => ({
    type: ANIMALS_ACTION_TYPES.IS_LOADING,
    payload: payload
} as const);

export const fetchAnimalsFailed = (payload: boolean) => ({
    type: ANIMALS_ACTION_TYPES.FETCH_ANIMALS_FAILED,
    payload: payload
} as const);

export const fetchAnimals = (access_token: string, currentAnimal:string, breed:string): ThunkActionAnimalsResult => async (dispatch: Dispatch<IAnimalsAction>) => {
    dispatch(isLoadingAnimals(true));
    try {
        let query = '';
        if (currentAnimal.length) {
            query = `?type=${currentAnimal.charAt(0).toLowerCase() + currentAnimal.slice(1)}`;
            if (breed) {
                query += `&breed=${breed}`;
            }
        }
        const animals = await API.fetchAnimals(query, 1, access_token);
        dispatch(setAnimals(animals));

    } catch (err) {
        dispatch(fetchAnimalsFailed(false));
    }
    dispatch(isLoadingAnimals(false));
};


export default setAnimals;