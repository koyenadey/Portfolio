import { getImgUrl } from "@utils/util";
import { projectCard } from "@common/type";
import styles from "@features/Projects/ProjectCard.module.css";
import { BsBrowserChrome } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";

export const ProjectCard = ({ project }: projectCard) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={getImgUrl(project.imageSrc)}
        alt={project.title}
      />
      <h3 className={styles.title}>{project.title}</h3>

      <div className={styles.cardCover}>
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
        <div className={styles.links}>
          <a className={styles.link} href={project.demo}>
            Demo <BsBrowserChrome />
          </a>
          <a className={styles.link} href={project.source}>
            Source <FaLocationArrow />
          </a>
        </div>
      </div>
    </div>
  );
};
