import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";

import styles from "./UserBlock.module.css";

// components
import FavoriteTop from "../FavoriteTop/FavoriteTop";
import { signOutUser } from "../../utils/firebase.utils";
import setUser from "../../store/AC/user";


const UserBlock: React.FC = () => {
    const { user } = useSelector((s: AppStateType) => s.user);

    const dispatch = useDispatch();

    const signOutHandler = async () => {
        await signOutUser();
       
        dispatch(setUser(null));
    }
    

    return (
        <div className={styles.wrapper}>
            {user
                ? (<>
                    <FavoriteTop />
                    <span>Hi, Demo</span>
                    <div onClick={signOutHandler}>Log out</div>
                </>)
                : <Link className="btn" to={'/auth'}>Login</Link>
            }
        </div>
    )
}

export default UserBlock
