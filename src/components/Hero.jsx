import React from 'react'
import {getImageUrl} from "../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (<section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mark!</h1>
    <p className={styles.description}>I am a full stack developer with over 2 years of experience in IT support and web development.</p>
    <a href="mailto:markaprus@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    {/* <img src={getImageUrl("hero/heroImage.png")} alt="Hero" className={styles.heroImg}/> */}
    {/* <div className={styles.topBlur} />
    <div className={styles.bottomBlur} /> */}
  </section>
);
};

