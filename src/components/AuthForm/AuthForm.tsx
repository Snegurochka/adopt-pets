import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import setAuth from '../../store/AC/auth';

import styles from './AuthForm.module.css';

import Button from "../UI/Button/Button";
import { createUserDocumentFromAuth, signInUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase.utils';
import FormInput from '../UI/FormInput/FormInput';
import setUser from '../../store/AC/user';

const defaultFields = {
    email: '',
    password: '',
}

const AuthForm: React.FC = () => {
    const [fields, setFields] = useState(defaultFields);
    const { email, password } = fields;

    const dispatch = useDispatch();
    const history = useHistory();

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFields({ ...fields, [name]: value });
    };

    const submitHandler = async (evt: React.FormEvent) => {
        evt.preventDefault();
        await signInUserWithEmailAndPassword(email, password);
        dispatch(setAuth());
        history.replace(`/`);
    }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        dispatch(setAuth());
        dispatch(setUser(user));
        history.replace(`/`);
    };

    return (
        <section>
            <h2>Login</h2>
            <form action="#" method="post" className={styles.wrapper_form}>
                <FormInput label="Email address" name="email" value={email} onChange={changeHandler} />
                <FormInput label="Password" name="password" value={password} type='password' onChange={changeHandler} />

                <Button appearance='primary' callback={submitHandler}>Login</Button>
            </form>
            <Button appearance='primary' callback={logGoogleUser}>Sign in with Google Popup</Button>
        </section>
    )
}

export default AuthForm
