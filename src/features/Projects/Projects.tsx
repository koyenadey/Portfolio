import React from "react";
import projectData from "../../data/projects.json";
import { projectType } from "@common/type";
import { ProjectCard } from "@features/Projects/ProjectCard";
import styles from "@features/Projects/Projects.module.css";
import { AnimatePresence, motion } from "framer-motion";

export const Projects = () => {
  const projects = projectData as projectType[];
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 100 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 1 }}
        id="projects"
        className={styles.container}
      >
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.project}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};
