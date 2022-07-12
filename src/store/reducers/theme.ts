import { IThemeAction } from "./actionsInterfaces";
import { CHANGE_THEME } from '../actionsTypes';

const ThemeReducer = (state = '', action: IThemeAction):string => {
    switch (action.type) {
        case CHANGE_THEME:
            return action.payload;
        default:
            return state;
    }
}

export default ThemeReducer;