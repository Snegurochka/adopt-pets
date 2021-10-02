import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import logo from '../../img/logo_adopt_me.png';

const Header: React.FC = () => (
    <header className={styles.wrapper}>
          <Link to="/">
            <h1><img src={logo} alt="Adopt me!" /></h1>
          </Link>
    </header>
)

export default Header;