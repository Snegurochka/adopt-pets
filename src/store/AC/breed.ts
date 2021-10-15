import { IBreedAction } from "./../reducers/actionsInterfaces";
import { CHANGE_BREED } from './../reducers/actionsTypes';

const changeBreedAC = (breed:string):IBreedAction => {
    return {
        type: CHANGE_BREED,
        payload: breed
    }
}
export default changeBreedAC;