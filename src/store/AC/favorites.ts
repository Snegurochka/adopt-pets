import { Dispatch } from "react";
import { IFavoriteAnimal } from "../../interfaces/interfaces";
import { IFavoritesAction } from "./../reducers/actionsInterfaces";
import { FAVORITE_ACTION_TYPES } from '../actionsTypes';
import { addFavoriteAnimalDoc, deleteFavoriteAnimalDoc, getFavoritesByUser } from "../../utils/firebase.utils";
import { IFavoriteAnimalRequest } from "../../interfaces/APIinterfases";

export const addFavoriteAnimal = (animal: IFavoriteAnimal) => ({
    type: FAVORITE_ACTION_TYPES.ADD_FAV_ANIMAL,
    payload: animal
} as const);

export const deleteFavoriteAnimal = (refId: string) => ({
    type: FAVORITE_ACTION_TYPES.DEL_FAV_ANIMAL,
    payload: refId
} as const);

export const setFavoriteAnimals = (animals: IFavoriteAnimal[]) => ({
    type: FAVORITE_ACTION_TYPES.ADD_FAV_ANIMALS,
    payload: animals
} as const);

export const setFavoriteAnimal = (animal: IFavoriteAnimalRequest) => async (dispatch: Dispatch<IFavoritesAction>) => {
    const refId = await addFavoriteAnimalDoc(animal);
    dispatch(addFavoriteAnimal({...animal, refId}));
}

export const removeFavoriteAnimal = (refId: string) => async (dispatch: Dispatch<IFavoritesAction>) => {
    await deleteFavoriteAnimalDoc(refId);
    dispatch(deleteFavoriteAnimal(refId))
}

export const fetchFavoriteAnimals = (id: string) => async (dispatch: Dispatch<IFavoritesAction>) => {
    const animals = await getFavoritesByUser(id);
    dispatch(setFavoriteAnimals(animals));
}