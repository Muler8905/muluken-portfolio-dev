import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '../animations/variants';
import styles from './styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.imageBox}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        variants={fadeLeft}
      >
        <img  src="assets/profile/profile1.jpg" alt="Muluken Ugamo" />
      </motion.div>

      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        variants={fadeRight}
      >
        <h2>🧑‍💻 About Me</h2>
        <p>
         <span>Hi, I’m Muluken Ugamo </span> — a passionate Web Developer and Creative Designer who loves building modern, responsive, and visually appealing digital experiences. I blend technology and creativity using React, Node.js, and Figma to bring ideas to life with clarity, color, and code.
        </p>
      </motion.div>
    </section>
  );
}
