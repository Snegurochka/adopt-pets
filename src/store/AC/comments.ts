import { IComment } from "../../interfaces/interfaces";
import { ICommentsAction } from "./../reducers/actionsInterfaces";
import { SET_COMMENTS } from './../reducers/actionsTypes';

const setComments = (comments:IComment[]):ICommentsAction => {
    return {
        type: SET_COMMENTS,
        payload: comments
    }
}
export default setComments;