import { createSelector } from 'reselect';
import { AppStateType } from '../reducers';

const selectFavoritesReducer = (state: AppStateType) => state.favorites;

export const selectFavoritesAnimals = createSelector(
    [selectFavoritesReducer],
    (favorites) => favorites.animals
);

export const selectFavoritesCount = createSelector([selectFavoritesAnimals], (animals) =>
    animals.length
);