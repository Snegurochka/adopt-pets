import { AnimalTypesResponse } from "../../interfaces/APIinterfases";
import { CHANGE_ANIMAL, SET_ANIMAL } from './../reducers/actionsTypes';

export const changeAnimal = (animal: string) => ({
    type: CHANGE_ANIMAL,
    payload: animal
} as const)

export const setAnimalTypes = (animals: AnimalTypesResponse[]) => ({
    type: SET_ANIMAL,
    payload: animals
} as const)

