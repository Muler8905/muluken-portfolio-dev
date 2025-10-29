import { motion } from "framer-motion";
import { useState } from "react";
import styles from './styles/ProfileOrbit.module.css';
export default function ProfileOrbit() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.orbitContainer}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className={styles.orbitRing}
        animate={{
          rotate: 360,
          borderColor: hover
            ? ["orange", "orangered", "red", "darkred", "orange"]
            : ["#10b981", "#10b981"],
          scale: hover ? 1.1 : 1,
          boxShadow: hover
            ? [
                "0 0 20px 5px rgba(9, 237, 253, 0.6)",
                "0 0 25px 8px rgba(0, 247, 255, 0.8)",
                "0 0 20px 5px rgba(0, 183, 255, 0.6)"
              ]
            : "0 0 10px 2px rgba(16,185,129,0.3)"
        }}
        transition={{
          repeat: Infinity,
          duration: hover ? 2 : 8,
          ease: "linear"
        }}
      >
        {/* Flame ball & particles */}
        <motion.div
          className={styles.flameBall}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: hover ? 2 : 8,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className={styles.flameInner}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut"
            }}
          />
          <div className={styles.tail} />

          {/* ✨ Spark particles */}
          <div className={styles.spark} />
          <div className={styles.spark2} />
          <div className={styles.spark3} />
        </motion.div>
      </motion.div>

      <img src="assets/profile/profile2.jpg" alt="Muluken Ugamo" className={styles.profileImg} />
    </div>
  );
}
