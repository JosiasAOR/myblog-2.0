"use client";
import Link from "next/link";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.span}>
          <p className={styles.p}>Blog Josias Dev © 2023</p>

          <ul className={styles.ul}>
            <Link className={styles.link} href={"https://github.com/JosiasAOR"}>
              {" "}
              Git Hub{" "}
            </Link>
            <Link
              className={styles.link}
              href={"https://www.linkedin.com/in/josias-rodrigues-708b191b2/"}
            >
              {" "}
              Linkedin{" "}
            </Link>
          </ul>
        </span>
      </div>
    </>
  );
}
