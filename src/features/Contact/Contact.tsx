import React from "react";
import styles from "@features/Contact/Contact.module.css";
import { CiMail } from "react-icons/ci";
import { getImgUrl } from "@utils/util";
import { TbCircleLetterC } from "react-icons/tb";

export const Contact = () => {
  const email: string = import.meta.env.VITE_APP_EMAIL;
  const linkedin: string = import.meta.env.VITE_APP_LINKEDIN;
  const github: string = import.meta.env.VITE_APP_GITHUB;

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Together,let's bring ideas to reality and create something amazing!
        </h1>
        <p className={styles.subtitle}>
          Reach out to me and lets find a solution together!
        </p>
        <a className={styles.mailBtn} href={`mailto:${email}`}>
          Email Me <CiMail />
        </a>
      </div>
      <div className={styles.footer}>
        <p className={styles.copyright}>
          Copyright <TbCircleLetterC alignmentBaseline="auto" /> 2024 Koyena Dey
        </p>
        <div className={styles.links}>
          <a href={github} target="_blank">
            <img
              className={styles.link}
              src={getImgUrl("contact/githubIcon.png")}
              alt="LinkedIn"
            />
          </a>
          <a href={linkedin} target="_blank">
            <img
              className={styles.link}
              src={getImgUrl("contact/linkedinIcon.png")}
              alt="github"
            />
          </a>
        </div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
