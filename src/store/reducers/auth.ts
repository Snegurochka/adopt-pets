import { SET_AUTH } from './actionsTypes';
import { AuthAction } from "./actionsInterfaces";

const initState = {
    isLoggin: false
}

type initStateType = typeof initState;

const AuthReducer = (state = initState, action: AuthAction): initStateType => {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, isLoggin: true };
        default:
            return state;
    }
}

export default AuthReducer;