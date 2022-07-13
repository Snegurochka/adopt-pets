import { createSelector } from 'reselect';
import { AppStateType } from '../reducers';

const selectUserReducer = (state: AppStateType) => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (user) => user.user
);