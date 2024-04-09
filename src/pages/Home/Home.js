import React, { Component } from "react";
import styles from "./Home.module.scss";
import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Profile from "../../components/Profile";


export class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Header />
                <Profile />
                <Gallery />
            </div>
        );
    }
}

export default Home;
   