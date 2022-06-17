import { User } from "firebase/auth";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from ".";
import { oauthTokenAPIResponse, PetAPIResponse } from "../../interfaces/APIinterfases";
import { changeAnimal, setAnimalTypes } from "../AC/animal";
import { fetchCommentsFailed, setComments, isLoadingComments } from "../AC/comments";
import { addFavoriteAnimal, deleteFavoriteAnimal, setFavoriteAnimals } from "../AC/favorites";
import {
    CHANGE_LOCATION, CHANGE_THEME, CHANGE_BREED,
    SET_ANIMALS, SET_TOKEN, SET_AUTH,
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

export type IAnimalAction =
    | ReturnType<typeof changeAnimal>
    | ReturnType<typeof setAnimalTypes>;

export type IFavoritesAction =
    | ReturnType<typeof addFavoriteAnimal>
    | ReturnType<typeof deleteFavoriteAnimal>
    | ReturnType<typeof setFavoriteAnimals>;

export type ICommentsAction =
    | ReturnType<typeof setComments>
    | ReturnType<typeof isLoadingComments>
    | ReturnType<typeof fetchCommentsFailed>


export type ThunkActionResult<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

export type ThunkActionCommentsResult = ThunkActionResult<ICommentsAction>