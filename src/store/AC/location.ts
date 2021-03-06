import { ILocationAction } from "./../reducers/actionsInterfaces";
import { CHANGE_LOCATION } from '../actionsTypes';

const changeLocationAC = (location:string):ILocationAction => {
    return {
        type: CHANGE_LOCATION,
        payload: location
    }
}
export default changeLocationAC;