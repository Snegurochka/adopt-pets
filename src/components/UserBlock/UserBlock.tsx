import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";
import { SignOut } from "../../store/AC/user";


import styles from "./UserBlock.module.css";

// components
import FavoriteTop from "../FavoriteTop/FavoriteTop";


const UserBlock: React.FC = () => {
    const { user } = useSelector((s: AppStateType) => s.user);

    const dispatch = useDispatch();

    const signOutHandler = () => {
        dispatch(SignOut());
    }

    return (
        <div className={styles.wrapper}>
            {user
                ? (<>
                    <FavoriteTop />
                    <Link to='/account'>My account</Link>
                    <div onClick={signOutHandler}>Log out</div>
                </>)
                : <Link className="btn" to={'/auth'}>Login</Link>
            }
        </div>
    )
}

export default UserBlock
