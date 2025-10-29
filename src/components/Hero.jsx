import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import styles from './styles/Hero.module.css';
import ProfileOrbit from './ProfileOrbit';
import { Typewriter } from 'react-simple-typewriter';
// import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaDownload } from 'react-icons/fa';


export default function Hero() {
  return (
    <motion.section
      id="hero"
      className={styles.hero}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={fadeUp}
    >
      <div className={styles.text}>
        <h1 className={styles.title}>Hi, I'm Muluken Ugamo</h1>
        <p className={styles.subtitle}>
          <Typewriter
            words={['Web Developer', 'React & .NET Specialist', 'Open Source Contributor']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </p>
      </div>

      <div>
        <ProfileOrbit />
        </div>
      
    </motion.section>
  );
}
