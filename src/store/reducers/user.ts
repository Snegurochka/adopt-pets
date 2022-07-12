import { SET_USER } from '../actionsTypes';
import { IUserAction } from "./actionsInterfaces";
import { User } from 'firebase/auth';

const initState = {
    "user": null as User | null
}

type initStateType = typeof initState;

const AuthReducer = (state = initState, action: IUserAction): initStateType => {
    switch (action.type) {
        case SET_USER:
            if (!action.payload) {
                return { ...state, user: null };
            }
            return { ...state, user: {...action.payload} };
        default:
            return state;
    }
}

export default AuthReducer;