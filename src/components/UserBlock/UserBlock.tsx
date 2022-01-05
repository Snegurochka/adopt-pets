import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";

import styles from "./UserBlock.module.css";

import Button from "../UI/Button/Button";
import { AppStateType } from "../../store/reducers";
import setAuth from '../../store/AC/auth';

const UserBlock: React.FC = () => {
    const { isLoggin } = useSelector((s: AppStateType) => s.auth);
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            {isLoggin ? <span>Hi, Demo</span> : <Button appearance='primary' callback={() => { dispatch(setAuth()) }}>Login</Button>}

        </div>
    )
}

export default UserBlock
