import { Dispatch } from "react";
import { IComment } from "../../interfaces/interfaces";
import {
  addCommentDoc,
  getCommentsByPetFromAPI,
} from "../../utils/firebase.utils";
import {
  ICommentsAction,
  ThunkActionCommentsResult,
} from "./../reducers/actionsInterfaces";
import { COMMENTS_ACTION_TYPES } from "../actionsTypes";
import { History } from "history";
import { AppRoute } from "../../const";

export const setComments = (comments: IComment[]) =>
  ({
    type: COMMENTS_ACTION_TYPES.SET_COMMENTS,
    payload: comments,
  } as const);

export const isLoadingComments = (payload: boolean) =>
  ({
    type: COMMENTS_ACTION_TYPES.IS_LOADING,
    payload: payload,
  } as const);

export const fetchCommentsFailed = (payload: boolean) =>
  ({
    type: COMMENTS_ACTION_TYPES.FETCH_COMMENTS_FAILED,
    payload: payload,
  } as const);

export const addComment = (comment: IComment) =>
  ({
    type: COMMENTS_ACTION_TYPES.ADD_COMMENT,
    payload: comment,
  } as const);

export const fetchComments =
  (petId: string): ThunkActionCommentsResult =>
  async (dispatch: Dispatch<ICommentsAction>) => {
    dispatch(isLoadingComments(true));

    try {
      const comments = await getCommentsByPetFromAPI(petId);
      dispatch(setComments(comments));
    } catch (err) {
      dispatch(fetchCommentsFailed(false));
    }
    dispatch(isLoadingComments(false));
  };

export const addCommentThunk =
  (comment: IComment, history: History): ThunkActionCommentsResult =>
  async (dispatch: Dispatch<ICommentsAction>) => {
    await addCommentDoc(comment);
    dispatch(addComment(comment));
    history.replace(`${AppRoute.DETAILS_INDEX}${comment.petId}`);
  };
