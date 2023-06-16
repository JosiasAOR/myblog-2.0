import React from "react";
import styles from "./Banner.module.css";
import { adicionarVisualizacao } from "./setViewPost";

interface Post {
  id: string;
  image: string;
  theme: string;
  date: string;
  views: number;
  category: string;
  content: string;
}

interface BannerProps {
  post: Post;
}

export const Banner: React.FC<BannerProps> = ({ post }) => (
  <main style={{margin:10}}>

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
        <p className={styles.views}>Visualizações: {post?.views}</p>
        <p className={styles.category}>{post?.category}</p>
      </div>
      <p className={styles.description}>
        {post?.content?.substring(0, 120)}...
      </p>
    </div>
  </div>
  </main>

);
