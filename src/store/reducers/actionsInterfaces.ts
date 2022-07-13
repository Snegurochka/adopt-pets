import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from ".";
import { oauthTokenAPIResponse} from "../../interfaces/APIinterfases";
import { changeAnimal, setAnimalTypes } from "../AC/animal";
import setAnimals, { fetchAnimalsFailed, isLoadingAnimals } from "../AC/animals";
import { fetchCommentsFailed, setComments, isLoadingComments, addComment } from "../AC/comments";
import { addFavoriteAnimal, deleteFavoriteAnimal, setFavoriteAnimals } from "../AC/favorites";
import { setUser } from "../AC/user";
import {
    CHANGE_LOCATION, CHANGE_THEME, CHANGE_BREED,
    SET_TOKEN, SET_AUTH,
} from "../actionsTypes";

export interface IAccessTokenAction {
    type: typeof SET_TOKEN
    payload: oauthTokenAPIResponse
}

export interface AuthAction {
    type: typeof SET_AUTH
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

export type IAnimalsAction =
    | ReturnType<typeof setAnimals>
    | ReturnType<typeof isLoadingAnimals>
    | ReturnType<typeof fetchAnimalsFailed>

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
    | ReturnType<typeof addComment>

export type IUserAction =
    | ReturnType<typeof setUser>


export type ThunkActionResult<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

export type ThunkActionAnimalsResult = ThunkActionResult<IAnimalsAction>
export type ThunkActionCommentsResult = ThunkActionResult<ICommentsAction>
export type ThunkActionUserResult = ThunkActionResult<IUserAction>