import { useState } from "react";
import styles from "@features/Navbar/Navbar.module.css";
import { getImgUrl } from "@utils/util";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Koyena
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImgUrl("nav/closeIcon.png")
              : getImgUrl("nav/menuIcon.png")
          }
          alt="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
