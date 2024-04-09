import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Icon from "../assets/images/logo.svg";


function Header(props) {
    return (
        <div className={styles.Header}>
            <img src={Icon} />
        </div>
    );
}

export default Header;
