import React from 'react';
import { useDispatch } from 'react-redux';
import setAuth from '../../store/AC/auth';

import styles from './AuthForm.module.css';

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
const AuthForm: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <section className={styles.wrapper}>
        <Card>
            AuthForm
            <Button appearance='primary' callback={() => { dispatch(setAuth()) }}>Login</Button>
        </Card>
        </section>
    )
}

export default AuthForm
