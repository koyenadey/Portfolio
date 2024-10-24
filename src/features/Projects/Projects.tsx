import React from "react";
import projectData from "../../data/projects.json";
import { projectType } from "@common/type";
import { ProjectCard } from "@features/Projects/ProjectCard";
import styles from "@features/Projects/Projects.module.css";

export const Projects = () => {
  const projects = projectData as projectType[];
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.project}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
