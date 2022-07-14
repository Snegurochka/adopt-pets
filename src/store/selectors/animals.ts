import { createSelector } from 'reselect';
import { AppStateType } from '../reducers';
import { AnimalsInitStateType } from '../reducers/animals';

const selectAnimalsReducer = (state: AppStateType):AnimalsInitStateType => state.animals;

export const selectAnimals = createSelector(
    [selectAnimalsReducer],
    (animals) => animals.animals
);

export const selectAnimalsIsLoading = createSelector(
    [selectAnimalsReducer],
    (animals) => animals.isLoading
);