import { useParams, useNavigate } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import styles from './styles/BlogDetail.module.css';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <section className={styles.blogDetail}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back to Blog
      </button>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{new Date(post.date).toLocaleDateString()}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
}
