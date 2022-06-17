import { User } from "firebase/auth";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from ".";
import { AnimalTypesResponse, oauthTokenAPIResponse, PetAPIResponse } from "../../interfaces/APIinterfases";
import { IFavoriteAnimal } from "../../interfaces/interfaces";
import { fetchCommentsFailed, setComments, isLoadingComments } from "../AC/comments";
import {
    CHANGE_LOCATION, CHANGE_THEME, CHANGE_ANIMAL, CHANGE_BREED,
    SET_ANIMALS, SET_TOKEN, SET_ANIMAL, SET_AUTH,
    ADD_FAV_ANIMAL, ADD_FAV_ANIMALS, DEL_FAV_ANIMAL, 
    SET_USER
} from "./actionsTypes";

export interface IAccessTokenAction {
    type: typeof SET_TOKEN
    payload: oauthTokenAPIResponse
}

export interface AuthAction {
    type: typeof SET_AUTH
}

export interface IUserAction {
    type: typeof SET_USER
    payload: User | null
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

export interface IBreedAction {
    type: typeof CHANGE_BREED
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

interface IFavoritesAddAction {
    type: typeof ADD_FAV_ANIMAL
    payload: IFavoriteAnimal
}

interface IFavoritesDelAction {
    type: typeof DEL_FAV_ANIMAL
    payload: number
}

interface IFavoritesSetAction {
    type: typeof ADD_FAV_ANIMALS
    payload: IFavoriteAnimal[]
}

export type IAnimalAction = IAnimalSetAction | IAnimalChangeAction;
export type IFavoritesAction = IFavoritesAddAction | IFavoritesSetAction | IFavoritesDelAction;

export type ICommentsAction =
| ReturnType<typeof setComments>
| ReturnType<typeof isLoadingComments>
| ReturnType<typeof fetchCommentsFailed>


export type ThunkActionResult<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

export type ThunkActionCommentsResult = ThunkActionResult<ICommentsAction>