import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import setAuth from '../../store/AC/auth';

import styles from './AuthForm.module.css';

import Button from "../UI/Button/Button";
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase.utils';

const AuthForm: React.FC = () => {
    const [username, setUsername] = useState('demo@demo.com');
    const [password, setPassword] = useState('demodemo');

    const dispatch = useDispatch();
    const history = useHistory();

    const submitHandler = (evt: React.FormEvent) => {
        evt.preventDefault();
        dispatch(setAuth());
        history.replace(`/`);
    }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <section>
            <h2>Login</h2>
            <form action="#" method="post" className={styles.wrapper_form}>
                <label>
                    <span>Email address</span>
                    <input
                        type='text'
                        value={username}
                        name='username'
                        placeholder="example@example.com"
                        onChange={(evt) => { setUsername(evt.currentTarget.value) }}
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input
                        type='password'
                        value={password}
                        name='password'
                        onChange={(evt) => { setPassword(evt.currentTarget.value) }}
                    />
                </label>
                <Button appearance='primary' callback={submitHandler}>Login</Button>
            </form>
            <Button appearance='primary' callback={logGoogleUser}>Sign in with Google Popup</Button>
        </section>
    )
}

export default AuthForm
