import React, { ChangeEvent, useState } from 'react'
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
                <FormInput label="Display name" name="displayName" value={displayName} onChange={changeHandler} />
                <FormInput label="Email address" name="email" value={email} onChange={changeHandler} placeholder="example@example.com" />
                <FormInput label="Password" name="password" value={password} onChange={changeHandler} />

                <Button>Sign Up</Button>
            </form>
        </section>
    )
}

export default SignUpForm