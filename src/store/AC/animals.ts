import { PetAPIResponse } from "../../interfaces/APIinterfases";

import { ANIMALS_ACTION_TYPES } from '../actionsTypes';

export const setAnimals = (animals:PetAPIResponse) => ({
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

export default setAnimals;