import React from "react";
import styles from "./UserBlock.module.css";

import Button from "../UI/Button/Button";

const UserBlock: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Button appearance='primary'>Login</Button>
        </div>
    )
}

export default UserBlock
