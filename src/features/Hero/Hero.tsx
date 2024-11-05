import styles from "@features/Hero/Hero.module.css";
import { getImgUrl } from "@utils/util";
import Typewriter from "typewriter-effect";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export const Hero = () => {
  const options = {
    autoStart: true,
    loop: true,
    delay: 80,
    deleteSpeed: 15,
  };
  const email: string = import.meta.env.VITE_APP_EMAIL;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <Typewriter
            options={options}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi !")
                .pauseFor(1000)
                .deleteAll()
                .typeString("I'm Koyena")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Möi !")
                .pauseFor(1000)
                .deleteAll()
                .typeString("mä oon Kojena")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </h1>
        <AnimatePresence>
          <motion.p
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 2 }}
            className={styles.about}
          >
            I’m a passionate full-stack developer with a love for learning and
            growth. I thrive on challenges because they help me evolve as both a
            developer and an individual! Reach out if you'd like to know more!
          </motion.p>
        </AnimatePresence>
        {/* <a
          href={getImgUrl("cv/CV.pdf")}
          download="CV"
          className={styles.contactBtn}
        > */}
        <a className={styles.contactBtn} href={`mailto:${email}`}>
          Contact me <FaRegArrowAltCircleRight />
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
