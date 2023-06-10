import React from "react";
import styles from "./Banner.module.css";
import { adicionarVisualizacao } from "@/app/(public)/publicacoes/setViewPost";

export const Banner = ({ post }) => (
  <div
    onClick={() => {
      adicionarVisualizacao(post?.id);
    }}
    className={styles.container}
  >
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${post?.image})` }}
    ></div>

    <div className={styles.content}>
      <h2 className={styles.theme}>{post?.theme}</h2>
      <div className={styles.date}>
        <p>{post?.date}</p>
        <p className={styles.views}>Views: {post?.views}</p>
        <p className={styles.category}>{post?.category}</p>
      </div>
      <p className={styles.description}>
        {post?.content?.substring(0, 120)}...
      </p>
    </div>
  </div>
);

