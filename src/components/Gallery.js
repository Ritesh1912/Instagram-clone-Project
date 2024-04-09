import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Gallery.module.scss";
import Photo1 from "../assets/images/photo1.jpeg";
import Photo2 from "../assets/images/photo2.jpeg";
import Photo3 from "../assets/images/photo3.jpeg";
import Photo4 from "../assets/images/photo4.jpeg";
import Photo5 from "../assets/images/photo5.jpeg";
import Photo6 from "../assets/images/photo6.jpeg";
import Picture from "./Picture";


const pictures = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];


function Gallery(props) {
    const [update,setUpdate] = useState([]);
    
    const onsearchChange = () => {
         setUpdate([...update, {
            id: update.length,
            value: Math.random()
         }])
    }

    const { posts } = useSelector((state) => state.user);


    return (
         <div className={styles.Gallery}>
            {
                update.map((p, i) => (  <>
                      const cardId = uuid4();
                       
                       <Picture key={p.id} post={p} src={pictures[p.id - 1]} />                      
                       <ol>                      
                         <li key={p.id} SomeId= {cardId} greet={p.value}></li> 
                       </ol>
                       </>
                 ))
            }

            <button onClick={onsearchChange}>
              Submit
            </button>

         </div>

     );
}

export default Gallery;
