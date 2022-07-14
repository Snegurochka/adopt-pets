import { Dispatch } from "react";
import { IFavoriteAnimal } from "../../interfaces/interfaces";
import { IFavoritesAction } from "./../reducers/actionsInterfaces";
import { FAVORITE_ACTION_TYPES } from '../actionsTypes';
import { addFavoriteAnimalDoc, getFavoritesByUser } from "../../utils/firebase.utils";
import { IFavoriteAnimalRequest } from "../../interfaces/APIinterfases";

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

export const setFavoriteAnimal = (animal: IFavoriteAnimalRequest) => async (dispatch: Dispatch<IFavoritesAction>) => {
    await addFavoriteAnimalDoc(animal);
    dispatch(addFavoriteAnimal(animal));
}

export const removeFavoriteAnimal = (id: number) => async (dispatch: Dispatch<IFavoritesAction>) => {
    // await API.removeFavoriteAnimal(id);
    dispatch(deleteFavoriteAnimal(id))
}

export const fetchFavoriteAnimals = (id: string) => async (dispatch: Dispatch<IFavoritesAction>) => {
    const animals = await getFavoritesByUser(id);
    dispatch(setFavoriteAnimals(animals));
}