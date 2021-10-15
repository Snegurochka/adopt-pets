import { PetAPIResponse } from "../../interfaces/APIinterfases";
import { IAnimal, InitStateInterf } from "../../interfaces/interfaces";
import { IAnimalsAction } from "./actionsInterfaces";
import { SET_ANIMALS } from './actionsTypes';

const initState = {
    "animals": [] as IAnimal[],
    "pagination": {
        "count_per_page": 20,
        "total_count": 320,
        "current_page": 1,
        "total_pages": 16,
    }
}

const AnimalsReducer = (state = initState as InitStateInterf, action: IAnimalsAction): PetAPIResponse => {
    switch (action.type) {
        case SET_ANIMALS:
            return { ...state, animals: [...state.animals, ...action.payload.animals] };
        default:
            return state;
    }
}

export default AnimalsReducer;