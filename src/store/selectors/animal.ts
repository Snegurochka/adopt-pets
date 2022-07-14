import { createSelector } from 'reselect';
import { AppStateType } from '../reducers';

const selectAnimalReducer = (state: AppStateType) => state.animal;

export const selectFormAnimal = createSelector(
    [selectAnimalReducer],
    (animal) => animal.currentAnimal
);

export const selectFormAnimalTypes = createSelector([selectAnimalReducer], (animal) =>
    animal.animalTypes.map(item => item.name)
);