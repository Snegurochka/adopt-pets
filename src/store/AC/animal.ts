import { AnimalTypesResponse } from "../../interfaces/APIinterfases";
import { IAnimalAction } from "./../reducers/actionsInterfaces";
import { CHANGE_ANIMAL, SET_ANIMAL } from './../reducers/actionsTypes';

export const changeAnimal = (animal:string):IAnimalAction => {
    return {
        type: CHANGE_ANIMAL,
        payload: animal
    }
}

export const setAnimalTypes = (animals:AnimalTypesResponse[]):IAnimalAction => {
    return {
        type: SET_ANIMAL,
        payload: animals
    }
}

