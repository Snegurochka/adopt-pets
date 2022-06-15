import { CommentsAPIResponse } from "../../interfaces/APIinterfases";
import { IComment } from "../../interfaces/interfaces";
import { AppStateType } from "../reducers";

export const selectComments = (state: AppStateType) => {
    const { comments } = state.comments as CommentsAPIResponse;
    const commentsMap = comments.reduce((acc, { uid, title, text }, index) => {
        acc[index] = { uid, title, text };
        return acc;
    }, [] as IComment[]);

    return commentsMap;
};