import styles from "./Banner.module.css";

interface BannerProps {
  post?: {
    theme: string;
    date: string;
    category: string;
    content: string;
  };
}

export const Banner = ({ post }: BannerProps) => (
  <div className={styles.Container}>
    <div></div>

    <div className={styles.tudoJunto}>
      <div className={styles.container3}>
        <h2 className={styles.theme}>{post?.theme}</h2>
        <div className={styles.dataENome}>
          <p className={styles.postPreviewDate}>{post?.date}</p>

          <p className={styles.postPreviewCategory}>{post?.category}</p>
        </div>
      </div>
      <p className={styles.content}>
        {post?.content?.substring(0, 120)}...
      </p>
    </div>
  </div>
);
