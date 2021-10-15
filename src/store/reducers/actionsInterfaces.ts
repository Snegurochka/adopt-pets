import { AnimalTypesResponse, oauthTokenAPIResponse, PetAPIResponse } from "../../interfaces/APIinterfases";
import { CHANGE_LOCATION, CHANGE_THEME, CHANGE_ANIMAL, CHANGE_BREED, SET_ANIMALS, SET_TOKEN, SET_ANIMAL } from "./actionsTypes";

export interface IAccessTokenAction {
    type: typeof SET_TOKEN
    payload: oauthTokenAPIResponse  
}

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

interface IAnimalSetAction {
    type: typeof SET_ANIMAL
    payload: AnimalTypesResponse[]
}

interface IAnimalChangeAction {
    type: typeof CHANGE_ANIMAL 
    payload: string  
}

export interface IBreedAction {
    type: typeof CHANGE_BREED
    payload: string   
}

export type IAnimalAction = IAnimalSetAction | IAnimalChangeAction;