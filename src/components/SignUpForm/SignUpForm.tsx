import { FC, ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUnWithEmail } from '../../store/AC/user';
import Button from '../UI/Button/Button';
import FormInput from '../UI/FormInput/FormInput';

const signUpFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm: FC = () => {
    const [fields, setFields] = useState(signUpFields);
    const { displayName, email, password } = fields;

    const history = useHistory();
    const dispatch = useDispatch();

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFields({ ...fields, [name]: value });
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
      
        dispatch(signUnWithEmail(email, password, history, displayName));
    }

    return (
        <section>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form>
                <FormInput label="Display name" name="displayName" value={displayName} onChange={changeHandler} />
                <FormInput label="Email address" name="email" value={email} onChange={changeHandler} />
                <FormInput label="Password" name="password" value={password} type='password' onChange={changeHandler} />

                <Button callback={submitHandler}>Sign Up</Button>
            </form>
        </section>
    )
}

export default SignUpForm