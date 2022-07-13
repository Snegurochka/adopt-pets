import { PetAPIResponse } from "../../interfaces/APIinterfases";
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
    }
}

const AnimalsReducer = (state = initState, action: IAnimalsAction): PetAPIResponse => {
    switch (action.type) {
        case ANIMALS_ACTION_TYPES.SET_ANIMALS:
            return { ...state, animals: action.payload.animals };
        default:
            return state;
    }
}

export default AnimalsReducer;