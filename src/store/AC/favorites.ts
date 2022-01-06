import { Dispatch } from "react";
//import API from "../../API";
import { IFavoriteAnimal } from "../../interfaces/interfaces";
import { IFavoritesAction } from "./../reducers/actionsInterfaces";
import { ADD_FAV_ANIMAL } from './../reducers/actionsTypes';

const addFavoriteAnimal = (animal: IFavoriteAnimal): IFavoritesAction => {
    return {
        type: ADD_FAV_ANIMAL,
        payload: animal
    }
}

const setFavoriteAnimal = (animal: IFavoriteAnimal) => async (dispatch:Dispatch<IFavoritesAction>) => {
    //await API.addFavoriteAnimals(animal);
    dispatch(addFavoriteAnimal(animal));
}


export default setFavoriteAnimal;