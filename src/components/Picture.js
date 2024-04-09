import React, { useState, useEffect } from "react";
import styles from "./Picture.module.scss";



function Picture(props) {

    const [isHover, setHover] = useState(false);
    const { post } = props;

  

    return (

        <div className={styles.pic}>

            { //Short ckt operator (Only true pass karte hai)
              isHover && (               
                <div className={styles.postinfo}>
                    {post.likes} likes {post.comments} comments

                </div>
               )
            }

            <img src={props.src}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />

         

        </div>

    );
}

export default Picture;
