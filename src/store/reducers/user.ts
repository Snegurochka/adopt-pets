import { SET_USER } from './actionsTypes';
import { IUserAction } from "./actionsInterfaces";
import { User } from 'firebase/auth';

const initState = {
    "user": {} as User
}

type initStateType = typeof initState;

const AuthReducer = (state = initState, action: IUserAction): initStateType => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: {...action.payload} };
        default:
            return state;
    }
}

export default AuthReducer;