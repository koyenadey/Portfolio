import React from "react";
import { getImgUrl } from "@utils/util";
import { projectCard } from "@common/type";
import styles from "@features/Projects/ProjectCard.module.css";

export const ProjectCard = ({ project }: projectCard) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={getImgUrl(project.imageSrc)}
        alt={project.title}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.skills}>
        {project.skills.map((skill, id) => {
          return (
            <img
              key={id}
              className={styles.skillImage}
              src={getImgUrl(skill)}
              alt={skill}
            />
          );
        })}
      </div>
      <ul className={styles.skills}></ul>
      <div className={styles.links}>
        <a className={styles.link} href={project.demo}>
          Demo
        </a>
        <a className={styles.link} href={project.source}>
          Source
        </a>
      </div>
    </div>
  );
};
