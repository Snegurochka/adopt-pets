import { PetAPIResponse } from "../../interfaces/APIinterfases";
import { AnimalTypes } from "../../interfaces/interfaces";
import { CHANGE_LOCATION, CHANGE_THEME, CHANGE_ANIMAL, CHANGE_BREED, SET_ANIMALS } from "./actionsTypes";

export interface IAnimalsAction {
    type: typeof SET_ANIMALS
    payload: PetAPIResponse  
}

export interface ILocationAction {
    type: typeof CHANGE_LOCATION
    payload: string
}

export interface IThemeAction {
    type: typeof CHANGE_THEME
    payload: string
}

export interface IAnimalAction {
    type: typeof CHANGE_ANIMAL
    payload: AnimalTypes  
}

export interface IBreedAction {
    type: typeof CHANGE_BREED
    payload: string   
}