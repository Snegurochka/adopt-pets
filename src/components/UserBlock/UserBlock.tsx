import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/reducers";

import styles from "./UserBlock.module.css";

// components
import FavoriteTop from "../FavoriteTop/FavoriteTop";


const UserBlock: React.FC = () => {
    const { isLoggin } = useSelector((s: AppStateType) => s.auth);

    return (
        <div className={styles.wrapper}>
            {isLoggin
                ? (<>
                    <FavoriteTop />
                    <span>Hi, Demo</span>
                </>)
                : <Link className="btn" to={'/auth'}>Login</Link>
            }
        </div>
    )
}

export default UserBlock
