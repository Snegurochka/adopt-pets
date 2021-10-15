import { Animal } from "../../interfaces/APIinterfases";
import { IAnimalAction } from "./actionsInterfaces";
import { CHANGE_ANIMAL } from './actionsTypes';

const AnimalReducer = (state = 'dog' as Animal, action: IAnimalAction):Animal => {
    switch (action.type) {
        case CHANGE_ANIMAL:
            return action.payload;
        default:
            return state;
    }
}

export default AnimalReducer;