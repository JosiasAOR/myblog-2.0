"use client";
import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import styles from "./manuNav.module.css";

export default function SimpleMenu() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <div>
      <SlMenu
        style={{ width: 30, color: "orange", height: 60, marginLeft: 10 }}
        onClick={() => {
          setOpenNav(!openNav);
        }}
      />
      {openNav ? (
        <ul className={styles.ul}>
          <button
            onClick={() => {
              setOpenNav(!openNav);
            }}
            className={styles.button}
          >
            X
          </button>
          <Link href={"/"}>
            <MenuItem
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Home
            </MenuItem>{" "}
          </Link>
          <Link href={"/publicacoes"}>
            <MenuItem
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Publicações
            </MenuItem>{" "}
          </Link>
          <Link href={"/projetos"}>
            <MenuItem
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Projetos
            </MenuItem>{" "}
          </Link>
          <Link href={"/sobreMim"}>
            <MenuItem
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              Sobre Mim
            </MenuItem>{" "}
          </Link>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
