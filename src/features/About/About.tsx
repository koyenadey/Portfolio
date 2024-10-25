import React from "react";
import styles from "@features/About/About.module.css";
import { getImgUrl } from "@utils/util";
import { AnimatePresence, motion } from "framer-motion";

export const About = () => {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.container}
        id="about"
      >
        <h2 className={styles.title}>About</h2>

        <div className={styles.content}>
          <img
            className={styles.aboutImg}
            src={getImgUrl("about/aboutImage.png")}
            alt="my about image"
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImgUrl("about/cursorIcon.png")} alt="cursor icon" />
              <div>
                <h3>Frontend Developer</h3>
                <p>
                  I’m a front-end developer with experience in building
                  responsive and optimized sites
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImgUrl("about/serverIcon.png")} alt="server icon" />
              <div>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end
                  systems and APIs
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImgUrl("about/uiIcon.png")} alt="ui icon" />
              <div>
                <h3>Software Developer</h3>
                <p>
                  Started my career with Java and transitioned into Microsoft
                  technologies.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};
