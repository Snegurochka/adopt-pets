import { IFavoriteAnimal } from "../../interfaces/interfaces";
import { IFavoritesAction } from "./actionsInterfaces";
import { ADD_FAV_ANIMAL, ADD_FAV_ANIMALS, DEL_FAV_ANIMAL } from './actionsTypes';

const initState = {
    "animals": [] as IFavoriteAnimal[],
}

export type initStateType = typeof initState;

const FavoritesReducer = (state = initState as initStateType, action: IFavoritesAction): initStateType => {
    switch (action.type) {
        case ADD_FAV_ANIMAL:
            return { ...state, animals: [...state.animals, action.payload] };
        case ADD_FAV_ANIMALS:
            return { ...state, animals: [...action.payload] };
        case DEL_FAV_ANIMAL:
            return { ...state, animals: state.animals.filter((item) => item.id !== action.payload) };
        default:
            return state;
    }
}

export default FavoritesReducer;