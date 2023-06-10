import React from "react";
import styles from "./Banner.module.css";
import { adicionarVisualizacao } from './setViewPost';

interface BannerProps {
  post: {
    id: string;
    image: string;
    theme: string;
    date: string;
    views: number;
    category: string;
    content: string;
  };
}

export const Banner: React.FC<BannerProps> = ({ post }) => (
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
