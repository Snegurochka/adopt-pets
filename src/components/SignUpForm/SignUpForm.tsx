import React, { ChangeEvent, useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import Button from '../UI/Button/Button';

const signUpFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm: React.FC = () => {
    const [fields, setFields] = useState(signUpFields);
    const { displayName, email, password, confirmPassword } = fields;

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
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section>
            <h2>SignUpForm</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Display name</span>
                    <input
                        type='text'
                        value={displayName}
                        name='displayName'
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    <span>Email address</span>
                    <input
                        type='text'
                        value={email}
                        name='email'
                        placeholder="example@example.com"
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input
                        type='password'
                        value={password}
                        name='password'
                        onChange={changeHandler}
                    />
                </label>
                <Button>Sign Up</Button>
            </form>
        </section>
    )
}

export default SignUpForm