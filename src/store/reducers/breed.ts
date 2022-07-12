import { IBreedAction } from "./actionsInterfaces";
import { CHANGE_BREED } from '../actionsTypes';

const breedReducer = (state = '', action: IBreedAction):string => {
    switch (action.type) {
        case CHANGE_BREED:
            return action.payload;
        default:
            return state;
    }
}

export default breedReducer;