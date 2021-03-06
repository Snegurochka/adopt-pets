import { Dispatch } from 'react';
import { SET_USER } from '../actionsTypes';
import { User } from 'firebase/auth';
import { IUserAction, ThunkActionUserResult } from '../reducers/actionsInterfaces';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInUserWithEmailAndPassword,
    signInWithGooglePopup,
    signOutUser
} from '../../utils/firebase.utils';
import { History } from 'history';

export const setUser = (user: User | null) => ({
    type: SET_USER,
    payload: user
} as const);

export const signUnWithEmail = (
    email: string,
    password: string,
    history: History,
    displayName: string
): ThunkActionUserResult =>
    async (dispatch: Dispatch<IUserAction>) => {
        try {
            const userCredential = await createAuthUserWithEmailAndPassword(email, password);
            if (!userCredential) return;
            const { user } = userCredential;

            await createUserDocumentFromAuth(user, { displayName });
            dispatch(setUser(user));
            history.replace(`/`);
        } catch (error) {
            console.log(error);
        }
    }

export const signInWithEmail = (email: string, password: string, history: History): ThunkActionUserResult =>
    async (dispatch: Dispatch<IUserAction>) => {
        try {
            const userCredential = await signInUserWithEmailAndPassword(email, password);
            if (!userCredential) return;
            const { user } = userCredential;
            dispatch(setUser(user));
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

export const signInWithGoogle = (history: History): ThunkActionUserResult =>
    async (dispatch: Dispatch<IUserAction>) => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);

        dispatch(setUser(user));
        history.push('/');
    }

export const SignOut = (): ThunkActionUserResult =>
    async (dispatch: Dispatch<IUserAction>) => {
        await signOutUser();

        dispatch(setUser(null));
    }