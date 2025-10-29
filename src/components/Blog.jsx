import posts from '../data/blogPosts';
import styles from './styles/Blog.module.css';

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <h2 className={styles.heading}>Blog</h2>
      {posts.map((post, i) => (
        <article key={i} className={styles.post}>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.summary}>{post.summary}</p>
        </article>
      ))}
    </section>
  );
}
