import { Dispatch } from "react";
import API from "../../API";
import { IFavoriteAnimal } from "../../interfaces/interfaces";
import { IFavoritesAction } from "./../reducers/actionsInterfaces";
import { FAVORITE_ACTION_TYPES } from '../actionsTypes';

export const addFavoriteAnimal = (animal: IFavoriteAnimal) => ({
    type: FAVORITE_ACTION_TYPES.ADD_FAV_ANIMAL,
    payload: animal
} as const);

export const deleteFavoriteAnimal = (id: number) => ({
    type: FAVORITE_ACTION_TYPES.DEL_FAV_ANIMAL,
    payload: id
} as const);

export const setFavoriteAnimals = (animals: IFavoriteAnimal[]) => ({
    type: FAVORITE_ACTION_TYPES.ADD_FAV_ANIMALS,
    payload: animals
} as const);

export const setFavoriteAnimal = (animal: IFavoriteAnimal) => async (dispatch: Dispatch<IFavoritesAction>) => {
    //await API.addFavoriteAnimal(animal);
    dispatch(addFavoriteAnimal(animal));
}

export const removeFavoriteAnimal = (id: number) => async (dispatch: Dispatch<IFavoritesAction>) => {
    // await API.removeFavoriteAnimal(id);
    dispatch(deleteFavoriteAnimal(id))
}

export const fetchFavoriteAnimals = (id: number) => async (dispatch: Dispatch<IFavoritesAction>) => {
    const animals = await API.fetchFavoriteAnimals(id);
    dispatch(setFavoriteAnimals(animals));
}