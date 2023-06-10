"use client";
import styles from "./navegation.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import SimpleMenu from "./menuNav";

const inter = Inter({ subsets: ["latin"] });

export default function NavBar() {
  return (
    <div className={inter.className}>
      <div className={styles.fixed}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              {" "}
              <Link className={styles.link} href="/">
                {" "}
                Home
              </Link>
            </li>
            <li className={styles.li}>
              {" "}
              <Link href="/publicacoes"> Publicações</Link>
            </li>
            <li className={styles.li}>
              {" "}
              <Link href="/projetos"> Projetos</Link>
            </li>
            <li className={styles.li}>
              {" "}
              <Link href="/sobreMim"> Sobre Mim</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav2}>
          <SimpleMenu />
        </nav>
      </div>
    </div>
  );
}
