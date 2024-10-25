import React from "react";
import skillsData from "../../data/skills.json";
import historyData from "../../data/history.json";
import { getImgUrl } from "@utils/util";
import { skillsType, historyType } from "@common/type";
import styles from "@features/Experience/Experience.module.css";
import { AnimatePresence, motion } from "framer-motion";

export const Experience = () => {
  const skills: skillsType[] = skillsData;
  const history: historyType[] = historyData;
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Tech Stack</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <img src={getImgUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li className={styles.historyItem} key={id}>
                <img
                  src={getImgUrl(historyItem.imageSrc)}
                  alt={historyItem.organisation}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
