import { AnimalTypes } from "../../interfaces/interfaces";
import { IAnimalAction } from "./actionsInterfaces";
import { CHANGE_ANIMAL } from './actionsTypes';

const AnimalReducer = (state = 'dog' as AnimalTypes, action: IAnimalAction):AnimalTypes => {
    switch (action.type) {
        case CHANGE_ANIMAL:
            return action.payload;
        default:
            return state;
    }
}

export default AnimalReducer;