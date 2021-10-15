import { Animal } from "../../interfaces/APIinterfases";
import { CHANGE_LOCATION, CHANGE_THEME, CHANGE_ANIMAL, CHANGE_BREED } from "./actionsTypes";

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
    payload: Animal  
}

export interface IBreedAction {
    type: typeof CHANGE_BREED
    payload: string   
}