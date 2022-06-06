import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import setAuth from '../../store/AC/auth';

import styles from './AuthForm.module.css';

import Button from "../UI/Button/Button";
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase.utils';
import FormInput from '../UI/FormInput/FormInput';

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

    const submitHandler = (evt: React.FormEvent) => {
        evt.preventDefault();
        dispatch(setAuth());
        history.replace(`/`);
    }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
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
