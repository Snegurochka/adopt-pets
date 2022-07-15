import { IAnimal } from "../../interfaces/interfaces";
import { IAnimalsAction } from "./actionsInterfaces";
import { ANIMALS_ACTION_TYPES } from '../actionsTypes';

const initState = {
    "animals": [] as IAnimal[],
    "pagination": {
        "count_per_page": 20,
        "total_count": 320,
        "current_page": 1,
        "total_pages": 16,
    },
    error: false,
    isLoading: false,
}

export type AnimalsInitStateType = typeof initState;

const AnimalsReducer = (state = initState, action: IAnimalsAction) => {
    switch (action.type) {
        case ANIMALS_ACTION_TYPES.SET_ANIMALS:
            return { ...state, animals: action.payload.animals };
        case ANIMALS_ACTION_TYPES.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case ANIMALS_ACTION_TYPES.FETCH_ANIMALS_FAILED:
            return { ...state, error: true };
        default:
            return state;
    }
}

export default AnimalsReducer;