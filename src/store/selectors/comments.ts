import { createSelector } from 'reselect';
import { CommentsAPIResponse } from "../../interfaces/APIinterfases";
import { IComment } from "../../interfaces/interfaces";
import { AppStateType } from "../reducers";

const selectCommentsReducer = (state: AppStateType): CommentsAPIResponse => state.comments;

export const selectCommentsSlice = createSelector(
    [selectCommentsReducer],
    (commentsSlice) => commentsSlice.comments
);

export const selectComments = createSelector(
    [selectCommentsSlice],
    (comments) => comments.reduce((acc, { uid, title, text }, index) => {
        acc[index] = { uid, title, text };
        return acc;
    }, [] as IComment[]));