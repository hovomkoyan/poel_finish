import React, {useState} from 'react';
import styles from '../../styles/instagram.module.css'
import Image from "next/image";
const Instagram = () => {

    const [slide,setSlide]= useState([
        {id:1, image:'https://poels.geeklab.am/posts/1708581168_image.png'},
        {id:2, image:'https://poels.geeklab.am/posts/1708581306_image.png'},
        {id:3, image: 'https://poels.geeklab.am/posts/1708581317_image.png'},
        {id:4, image:'https://poels.geeklab.am/posts/1708581336_image.png'},
        {id:5, image: 'https://poels.geeklab.am/posts/1708581384_image.png'},

    ])
    return (

        <div className={styles.container}>
            <h3>Հետևիր մեզ instagram-ում</h3>
            <div className={styles.item}>
            {slide.map((element)=>(
                <Image  width={400} height={400} src={element.image} alt='chi bacum'/>
            ))}
            </div>
        </div>
    );
};

export default Instagram;