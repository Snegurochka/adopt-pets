import { IThemeAction } from "./../reducers/actionsInterfaces";
import { CHANGE_THEME } from './../reducers/actionsTypes';

const changeThemeAC = (theme:string):IThemeAction => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}
export default changeThemeAC;