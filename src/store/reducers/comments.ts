import { IComment } from "../../interfaces/interfaces";
import { COMMENTS_ACTION_TYPES } from '../actionsTypes';
import { ICommentsAction } from "./actionsInterfaces";

const initState = {
    comments: [] as IComment[],
    isLoading: false,
    error: null
}

export type CommentsInitStateType = typeof initState;

const CommentReducer = (state = initState, action: ICommentsAction) => {
    switch (action.type) {
        case COMMENTS_ACTION_TYPES.SET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case COMMENTS_ACTION_TYPES.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case COMMENTS_ACTION_TYPES.FETCH_COMMENTS_FAILED:
            return { ...state, error: true };
        case COMMENTS_ACTION_TYPES.ADD_COMMENT:
            return { ...state, comments: {...state.comments, ...action.payload} };
        default:
            return state;
    }
}

export default CommentReducer;