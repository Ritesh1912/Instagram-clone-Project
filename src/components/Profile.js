import React, { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import { useSelector } from "react-redux";
import UserPic from "../assets/images/user.jpg";

function Profile(props) {

    const user = useSelector((state) => state.user);
    //console.log(user);

    
    return (
        <div className={styles.Profile}>
        
            <div className={styles.userPic}>
                <img src={UserPic} />
            </div>
          <div className={styles.userInfo}>
                <div className={styles.username}>{user.username}</div>
                <div className={styles.follow}>
                    <b>{user.posts.length}</b> 
                     posts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <b>{user.followers}</b>
                     followers &nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{user.following}</b>
                     following
                </div>
            <div>
               <b>{user.name}</b>
            </div>
                <br/>
            <div>
               {user.bio}
            </div>
          </div>

        </div>
    );
}

export default Profile;
