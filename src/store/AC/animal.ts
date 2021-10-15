import { AnimalTypes } from "../../interfaces/interfaces";
import { IAnimalAction } from "./../reducers/actionsInterfaces";
import { CHANGE_ANIMAL } from './../reducers/actionsTypes';

const changeAnimalAC = (animal:AnimalTypes):IAnimalAction => {
    return {
        type: CHANGE_ANIMAL,
        payload: animal
    }
}
export default changeAnimalAC;