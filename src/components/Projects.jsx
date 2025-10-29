import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import projects from '../data/projects';
import styles from './styles/Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
            <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            variants={fadeUp}
          >
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.description} </p>
            <div className={styles.links}>
              <a href={p.demo} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={p.github} target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
