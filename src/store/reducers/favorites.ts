import { IFavoriteAnimal } from "../../interfaces/interfaces";
import { IFavoritesAction } from "./actionsInterfaces";
import { ADD_FAV_ANIMAL } from './actionsTypes';

const initState = {
    "animals": [] as IFavoriteAnimal[],
}

export type initStateType = typeof initState;

const FavoritesReducer = (state = initState as initStateType, action: IFavoritesAction): initStateType => {
    switch (action.type) {
        case ADD_FAV_ANIMAL:
            return { ...state, animals:  [...state.animals, {...action.payload}] };
        default:
            return state;
    }
}

export default FavoritesReducer;