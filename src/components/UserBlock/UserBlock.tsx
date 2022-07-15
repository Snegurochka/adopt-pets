import { FC } from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/selectors/user";
import { SignOut } from "../../store/AC/user";

import styles from "./UserBlock.module.css";
import { AppRoute } from "../../const";

// components
import FavoriteTop from "../FavoriteTop/FavoriteTop";


const UserBlock: FC = () => {
    const user = useSelector(selectCurrentUser);

    const dispatch = useDispatch();

    const signOutHandler = () => {
        dispatch(SignOut());
    }

    return (
        <div className={styles.wrapper}>
            {user
                ? (<>
                    <FavoriteTop />
                    <Link to={AppRoute.ACCOUNT}>My account</Link>
                    <div onClick={signOutHandler}>Log out</div>
                </>)
                : <Link className="btn" to={AppRoute.AUTH}>Login</Link>
            }
        </div>
    )
}

export default UserBlock
