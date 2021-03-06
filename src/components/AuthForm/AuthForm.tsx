import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signInWithEmail, signInWithGoogle } from '../../store/AC/user';

import styles from './AuthForm.module.css';

// components
import Button from "../UI/Button/Button";
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
        dispatch(signInWithEmail(email, password, history));
    }

    const logGoogleUser = () => {
        dispatch(signInWithGoogle(history));
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
