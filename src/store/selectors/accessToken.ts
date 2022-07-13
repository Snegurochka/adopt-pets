import { createSelector } from 'reselect';
import { AppStateType } from '../reducers';

const selectAccessTokenReducer = (state: AppStateType) => state.accessToken;

export const selectAccessToken = createSelector(
    [selectAccessTokenReducer],
    (accessToken) => accessToken.access_token
);