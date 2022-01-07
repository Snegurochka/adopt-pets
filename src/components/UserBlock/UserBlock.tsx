import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";

import styles from "./UserBlock.module.css";

import Button from "../UI/Button/Button";
import { AppStateType } from "../../store/reducers";
import setAuth from '../../store/AC/auth';
import { fetchFavoriteAnimals } from "../../store/AC/favorites";

const UserBlock: React.FC = () => {
    const { isLoggin } = useSelector((s: AppStateType) => s.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoggin) {
            dispatch(fetchFavoriteAnimals(1));
        }
    }, [isLoggin, dispatch]);

    return (
        <div className={styles.wrapper}>
            {isLoggin
                ? <span>Hi, Demo</span>
                : <Button appearance='primary' callback={() => { dispatch(setAuth()) }}>Login</Button>}
        </div>
    )
}

export default UserBlock
