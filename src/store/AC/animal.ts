import { Animal } from "../../interfaces/APIinterfases";
import { IAnimalAction } from "./../reducers/actionsInterfaces";
import { CHANGE_ANIMAL } from './../reducers/actionsTypes';

const changeAnimalAC = (animal:Animal):IAnimalAction => {
    return {
        type: CHANGE_ANIMAL,
        payload: animal
    }
}
export default changeAnimalAC;