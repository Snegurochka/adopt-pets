import { AnimalTypesResponse } from "../../interfaces/APIinterfases";
import { IAnimalAction } from "./actionsInterfaces";
import { SET_ANIMAL, CHANGE_ANIMAL } from '../actionsTypes';

const initState = {
    "animalTypes": [{'name':'','_links': {'self': ''}}] as AnimalTypesResponse[],
    "currentAnimal": ''
}

const AnimalReducer = (state = initState, action: IAnimalAction) => {
    switch (action.type) {
        case SET_ANIMAL:
            return { ...state, animalTypes: action.payload }
        case CHANGE_ANIMAL:
            return { ...state, currentAnimal: action.payload };
        default:
            return state;
    }
}

export default AnimalReducer;