import React from 'react';
import styles from '../../styles/contact.module.css'
import App from "@/component/layouts/app";
import Image from "next/image";
const Index = () => {
    return (
       <>
           <App>
               <div className={styles.container}>
                   <h1>Կոնտակտներ</h1>
                   <div className={styles.contact}>
                       <div className={styles.item}>
                           <Image width={400} height={400} src='https://www.poel.am/location.png' alt="chi bana"/>
                           <span>Հասցե</span>
                       </div>
                       <div className={styles.location}>
                           <p><a
                               href="https://maps.google.com?q=%D4%B5%D6%80%D6%87%D5%A1%D5%B6%2C%20%D5%93%D5%A1%D6%80%D5%BA%D5%A5%D6%81%D5%B8%D6%82%2017%2C%20KIVERA%20%D5%AD%D5%A1%D5%B6%D5%B8%D6%82%D5%A9%20%D5%BD%D6%80%D5%A1%D5%B0">Երևան,
                               Փարպեցու 17, KIVERA խանութ սրահ</a></p>
                           <div className={styles.text}>
                               <p><a
                                   href="https://maps.google.com?q=%D4%B5%D6%80%D6%87%D5%A1%D5%B6%2C%20%D4%B1%D6%80%D5%A1%D5%B4%D5%AB%2064%2C%20The%20Muse%20%D5%AD%D5%A1%D5%B6%D5%B8%D6%82%D5%A9%20%D5%BD%D6%80%D5%A1%D5%B0">Երևան,
                                   Արամի 64, The Muse խանութ սրահ</a></p>
                               <p><a
                                   href="https://maps.google.com?q=%D5%84%D5%B8%D5%BD%D5%AF%D5%BE%D5%A1%2C%20%D5%8D%D5%A5%D5%AC%D5%A5%D5%A6%D5%B6%D5%B5%D5%B8%D5%BE%D5%BD%D5%AF%D5%A1%D5%B5%D5%A1%204">Մոսկվա,
                                   Սելեզնյովսկայա 4 </a></p>
                           </div>
                       </div>
                   </div>
                   <div className={styles.itemOwn}>
                       <Image width={400} height={400} src='https://www.poel.am/location.png' alt="chi bana"/>
                       <span>Հեռախոսահամար</span>
                       <p><a href="tel:+37498534425">+37498534425</a></p>
                   </div>
                   <div className={styles.mail}>
                       <Image width={400} height={400} src='https://www.poel.am/mail.png' alt="chi bana"/>
                       <span>Էլհասցե</span>
                       <p><a href="mailto:mail-poel.am2020@gmail.com">mailpoel.am2020@gmail.com</a></p>
                   </div>
                   <div className={styles.massage}>
                       <h2>Ուղարկել հաղորդագրություն</h2>
                       <div className={styles.massageBackground}>
                           <div className={styles.form}>
                               <div className={styles.formGroup}>
                                   <label htmlFor="">Անուն*</label>
                                   <input placeholder="Անուն*"/>
                               </div>
                               <div className={styles.formGroup1}>
                                   <label htmlFor="">Ազգանուն*</label>
                                   <input placeholder="Ազգանուն*"/>
                               </div>
                               <div className={styles.formGroupMail}>
                                   <label htmlFor="">Էլ-Հասցե*</label>
                                   <input placeholder="Էլ-Հասցե*"/>
                               </div>
                               <div className={styles.formGroupNumber}>
                                   <label htmlFor="">Հեռախոսահամար*</label>
                                   <input placeholder="+37444606676"/>
                               </div>
                               <div className={styles.formGroupMesage}>
                                   <label htmlFor="">Հաղորդագրություն*</label>
                                   <textarea placeholder="Հաղորդագրություն*"></textarea>
                               </div>
                               <div className={styles.divButton}>
                                   <button>Ուղարկել</button>
                               </div>
                           </div>

                       </div>
                   </div>
               </div>

           </App>
       </>
    );
};

export default Index;