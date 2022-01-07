import { Dispatch } from "react";
import API from "../../API";
import { IFavoriteAnimal } from "../../interfaces/interfaces";
import { IFavoritesAction } from "./../reducers/actionsInterfaces";
import { ADD_FAV_ANIMAL, ADD_FAV_ANIMALS } from './../reducers/actionsTypes';

const addFavoriteAnimal = (animal: IFavoriteAnimal): IFavoritesAction => {
    return {
        type: ADD_FAV_ANIMAL,
        payload: animal
    }
}

const setFavoriteAnimals = (animals: IFavoriteAnimal[]): IFavoritesAction => {
    return {
        type: ADD_FAV_ANIMALS,
        payload: animals
    }
}

export const setFavoriteAnimal = (animal: IFavoriteAnimal) => async (dispatch:Dispatch<IFavoritesAction>) => {
    //await API.addFavoriteAnimal(animal);
    dispatch(addFavoriteAnimal(animal));
}

export const fetchFavoriteAnimals = (id: number) => async (dispatch:Dispatch<IFavoritesAction>) => {
    const animals = await API.fetchFavoriteAnimals(id);
    dispatch(setFavoriteAnimals(animals));
}