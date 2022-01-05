import { AuthAction } from '../reducers/actionsInterfaces';
import { SET_AUTH } from './../reducers/actionsTypes';

const setAuth = (): AuthAction => {
    return {
        type: SET_AUTH
    }
}
export default setAuth;