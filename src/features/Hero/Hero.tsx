import React from "react";
import styles from "@features/Hero/Hero.module.css";
import { getImgUrl } from "@utils/util";
import Typewriter from "typewriter-effect";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export const Hero = () => {
  const options = {
    autoStart: true,
    loop: true,
    delay: 80,
    deleteSpeed: 15,
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <Typewriter
            options={options}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi, I'm <br/>")
                .typeString("Koyena")
                .pauseFor(1000)
                .deleteAll()
                .typeString("I am a Web Developer")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </h1>
        <p className={styles.about}>
          I’m a passionate full-stack developer with a love for learning and
          growth. I thrive on challenges because they help me evolve as both a
          developer and an individual! Reach out if you'd like to know more!
        </p>
        <a className={styles.contactBtn} href="#">
          Download CV <FaRegArrowAltCircleRight />
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
