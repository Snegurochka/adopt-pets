import { SET_USER } from './../reducers/actionsTypes';
import { IUserAction } from '../reducers/actionsInterfaces';
import { User } from 'firebase/auth';

const setUser = (user: User): IUserAction => {
    return {
        type: SET_USER,
        payload: user
    }
}
export default setUser;