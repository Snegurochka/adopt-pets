import { IFavoriteAnimal } from "../../interfaces/interfaces";
import { IFavoritesAction } from "./../reducers/actionsInterfaces";
import { ADD_FAV_ANIMAL } from './../reducers/actionsTypes';

const addFavoriteAnimal = (animal: IFavoriteAnimal): IFavoritesAction => {
    return {
        type: ADD_FAV_ANIMAL,
        payload: animal
    }
}
export default addFavoriteAnimal;