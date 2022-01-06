import { AnimalTypesResponse, oauthTokenAPIResponse, PetAPIResponse } from "../../interfaces/APIinterfases";
import { IFavoriteAnimal } from "../../interfaces/interfaces";
import { CHANGE_LOCATION, CHANGE_THEME, CHANGE_ANIMAL, CHANGE_BREED, SET_ANIMALS, SET_TOKEN, SET_ANIMAL, SET_AUTH, ADD_FAV_ANIMAL } from "./actionsTypes";

export interface IAccessTokenAction {
    type: typeof SET_TOKEN
    payload: oauthTokenAPIResponse  
}

export interface AuthAction {
    type: typeof SET_AUTH
}

export interface IAnimalsAction {
    type: typeof SET_ANIMALS
    payload: PetAPIResponse  
}

export interface IFavoritesAction {
    type: typeof ADD_FAV_ANIMAL
    payload: IFavoriteAnimal  
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