import { useState } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import styles from './styles/BlogList.module.css';
import { motion } from 'framer-motion';

export default function BlogList() {
  const POSTS_PER_PAGE = 6;
  const [visible, setVisible] = useState(POSTS_PER_PAGE);

  const handleLoadMore = () => {
    setVisible(prev => prev + POSTS_PER_PAGE);
  };

  return (
    <section className={styles.blogPage}>
      <h1 className={styles.heading}>Blog</h1>
      <div className={styles.grid}>
        {blogPosts.slice(0, visible).map(post => (
          <motion.div
            key={post.id}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to={`/blog/${post.id}`}>
              <img src={post.thumbnail} alt={post.title} className={styles.thumbnail} />
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <p className={styles.date}>{new Date(post.date).toLocaleDateString()}</p>
            </Link>
          </motion.div>
        ))}
      </div>
      {visible < blogPosts.length && (
        <button className={styles.loadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </section>
  );
}
