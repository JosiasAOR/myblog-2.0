import styles from './InPost.module.css'

interface BannerProps {
  post?: {
    theme: string;
    date: string;
    category: string;
    content: string;
    image: string;
    views: string
  };
}

export const InPost = ({ post }: BannerProps) => (
  <div className={styles.Container}>
    <div className={styles.daImg}>
    <img className={styles.img} src={post?.image} />
    </div>

    <div className={styles.tudoJunto}>
      <div className={styles.container3}>
        <h2 className={styles.theme}>{post?.theme}</h2>
        <div className={styles.dataENome}>
          <p className={styles.postPreviewDate}>{post?.date}</p>
          <p className={styles.postPreviewDate}>Views:{post?.views}</p>

          <p className={styles.postPreviewCategory}>{post?.category}</p>
        </div>
      </div>
      <p className={styles.content}>{post?.content}</p>
    </div>
  </div>
);
