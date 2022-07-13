import { oauthTokenAPIResponse } from "../../interfaces/APIinterfases";
import { IAccessTokenAction } from "./actionsInterfaces";
import { SET_TOKEN } from '../actionsTypes';

const initState = {
    token_type: "Bearer",
    expires_in: 0,
    access_token: ''
}

const AccessTokenReducer = (state = initState as oauthTokenAPIResponse, action: IAccessTokenAction): oauthTokenAPIResponse => {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, access_token: action.payload.access_token, expires_in: action.payload.expires_in };
        default:
            return state;
    }
}

export default AccessTokenReducer;