import { ILocationAction } from "./actionsInterfaces";
import { CHANGE_LOCATION } from './actionsTypes';

const locationReducer = (state = '', action: ILocationAction):string => {
    switch (action.type) {
        case CHANGE_LOCATION:
            return action.payload;
        default:
            return state;
    }
}

export default locationReducer;