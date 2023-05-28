import styles from "./Banner.module.css";

export  const Banner = ({ post }) => (
  <div className={styles.Container}>
    <img className={styles.img} src={post.image} />
<div className={styles.tudoJunto}>
<div className={styles.container3}>
      <h2 className={styles.theme}>
        {post.theme.substr(post.theme,100)}
           {/* <br></br>ID:{post.id} */}
      </h2>
      <div className={styles.dataENome}>
      <p className={styles.postPreviewDate}>{post.date}</p>

      <p className={styles.postPreviewCategory}>{post.category}</p>
    </div>
    </div>
    <p className={styles.content}>
      {post.content.substr(post.content, 100)}...
    </p>

</div>
    
  </div>
);