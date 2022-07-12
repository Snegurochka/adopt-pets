import { oauthTokenAPIResponse } from "../../interfaces/APIinterfases";

import { IAccessTokenAction } from "./../reducers/actionsInterfaces";
import { SET_TOKEN } from '../actionsTypes';

const setAccessToken = (accessToken:oauthTokenAPIResponse):IAccessTokenAction => {
    return {
        type: SET_TOKEN,
        payload: accessToken
    }
}
export default setAccessToken;