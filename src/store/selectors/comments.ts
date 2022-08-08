import { createSelector } from "reselect";
import { IComment } from "../../interfaces/interfaces";
import { AppStateType } from "../reducers";
import { CommentsInitStateType } from "../reducers/comments";

const selectCommentsReducer = (state: AppStateType): CommentsInitStateType =>
  state.comments;

export const selectCommentsSlice = createSelector(
  [selectCommentsReducer],
  (commentsSlice) => commentsSlice.comments
);

export const selectComments = createSelector(
  [selectCommentsSlice],
  (comments) =>
    comments.reduce((acc, { uid, petId, title, text }, index) => {
      acc[index] = { uid, petId, title, text };
      return acc;
    }, [] as IComment[])
);

export const selectCommentsIsLoading = createSelector(
  [selectCommentsReducer],
  (commentsSlice) => commentsSlice.isLoading
);
