import { IFavoriteAnimal } from "../../interfaces/interfaces";
import { IFavoritesAction } from "./actionsInterfaces";
import { FAVORITE_ACTION_TYPES } from '../actionsTypes';

const initState = {
    "animals": [] as IFavoriteAnimal[],
}

export type initStateType = typeof initState;

const FavoritesReducer = (state = initState as initStateType, action: IFavoritesAction): initStateType => {
    switch (action.type) {
        case FAVORITE_ACTION_TYPES.ADD_FAV_ANIMAL:
            return { ...state, animals: [...state.animals, action.payload] };
        case FAVORITE_ACTION_TYPES.ADD_FAV_ANIMALS:
            return { ...state, animals: [...action.payload] };
        case FAVORITE_ACTION_TYPES.DEL_FAV_ANIMAL:
            return { ...state, animals: state.animals.filter((item) => item.refId !== action.payload) };
        default:
            return state;
    }
}

export default FavoritesReducer;