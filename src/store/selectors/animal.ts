import { createSelector } from 'reselect';
import { AppStateType } from '../reducers';

const selectAnimalReducer = (state: AppStateType) => state.animal;

export const selectFormAnimal = createSelector(
    [selectAnimalReducer],
    (animal) => animal
);