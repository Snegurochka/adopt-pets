import { createSelector } from 'reselect';
import { AppStateType } from '../reducers';

const selectAnimalReducer = (state: AppStateType) => state.animal;

export const selectFormAnimal = createSelector(
    [selectAnimalReducer],
    (animal) => animal
);

export const selectFormAnimalTypes = createSelector([selectFormAnimal], (animal) =>
    animal.animalTypes.map(item => item.name)
);