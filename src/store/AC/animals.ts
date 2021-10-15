import { PetAPIResponse } from "../../interfaces/APIinterfases";

import { IAnimalsAction } from "./../reducers/actionsInterfaces";
import { SET_ANIMALS } from './../reducers/actionsTypes';

const setAnimals = (animals:PetAPIResponse):IAnimalsAction => {
    return {
        type: SET_ANIMALS,
        payload: animals
    }
}
export default setAnimals;