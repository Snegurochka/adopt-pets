import { createSelector } from 'reselect';
import { AppStateType } from '../reducers';

const selectAnimalsReducer = (state: AppStateType) => state.animals;

export const selectAnimals = createSelector(
    [selectAnimalsReducer],
    (animals) => animals.animals
);