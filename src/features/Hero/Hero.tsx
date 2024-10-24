import React from "react";
import styles from "@features/Hero/Hero.module.css";
import { getImgUrl } from "@utils/util";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Koyena</h1>
        <p className={styles.about}>
          I'm a full-stack developer with 3 years of experience using React,
          Typescript and Asp.net Core. Reach out if you'd like to know more!
        </p>
        <a className={styles.contactBtn} href="mailto:mymail@email.com">
          Contact me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImgUrl("hero/heroImage.png")}
        alt="Hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
