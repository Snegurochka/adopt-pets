import { IComment } from "../../interfaces/interfaces";
import { ICommentsAction } from "./actionsInterfaces";
import { SET_COMMENTS, ADD_COMMENT } from './actionsTypes';

const initState = {
    "comments": [] as IComment[],
}

const CommentReducer = (state = initState, action: ICommentsAction) => {
    switch (action.type) {
        case SET_COMMENTS:
            return { ...state, comments: action.payload }
        case ADD_COMMENT:
            return { ...state, comments: action.payload };
        default:
            return state;
    }
}

export default CommentReducer;