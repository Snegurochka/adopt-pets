import { useDispatch } from 'react-redux';
import setAuth from '../../store/AC/auth';

import Button from "../UI/Button/Button";
const AuthForm: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <div>
            AuthForm
            <Button appearance='primary' callback={() => { dispatch(setAuth()) }}>Login</Button>
        </div>
    )
}

export default AuthForm
