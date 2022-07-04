import { SET_USER } from './../reducers/actionsTypes';
import { User } from 'firebase/auth';
import { IUserAction, ThunkActionUserResult } from '../reducers/actionsInterfaces';
import { Dispatch } from 'react';
import { createUserDocumentFromAuth, signInUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from '../../utils/firebase.utils';
import { History } from 'history';

export const setUser = (user: User | null) => ({
    type: SET_USER,
    payload: user
} as const);

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