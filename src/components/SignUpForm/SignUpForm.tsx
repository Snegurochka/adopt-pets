import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUser } from '../../store/AC/user';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import Button from '../UI/Button/Button';
import FormInput from '../UI/FormInput/FormInput';

const signUpFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm: React.FC = () => {
    const [fields, setFields] = useState(signUpFields);
    const { displayName, email, password } = fields;

    const history = useHistory();
    const dispatch = useDispatch();

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFields({ ...fields, [name]: value });
    };

    const resetFormFields = () => {
        setFields(signUpFields);
    }

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const userCredential = await createAuthUserWithEmailAndPassword(email, password);
            if (!userCredential) return;
            const { user } = userCredential;

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            dispatch(setUser(user));
            history.replace(`/account`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput label="Display name" name="displayName" value={displayName} onChange={changeHandler} />
                <FormInput label="Email address" name="email" value={email} onChange={changeHandler} />
                <FormInput label="Password" name="password" value={password} type='password' onChange={changeHandler} />

                <Button>Sign Up</Button>
            </form>
        </section>
    )
}

export default SignUpForm