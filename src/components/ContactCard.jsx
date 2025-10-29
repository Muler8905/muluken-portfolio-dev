import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./styles/ContactCard.module.css";

export default function ContactCard() {
  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muluken-ugamo-4a23a0336/", color: "#0077B5" },
    { icon: <FaGithub />, url: "https://github.com/Muler8905", color: "#333" },
    { icon: <FaFacebook />, url: "https://facebook.com", color: "#1877F2" },
    { icon: <FaInstagram />, url: "https://instagram.com", color: "#E4405F" },
    { icon: <FaYoutube />, url: "https://youtube.com", color: "#FF0000" },
  ];

  return (
    <motion.section
      className={styles.contactCard}
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ rotateX: 3, rotateY: -3 }}
    >
      <h2 className={styles.title}>Let’s Connect</h2>
      <p className={styles.subtitle}>Feel free to reach out or download my CV.</p>

      <motion.a
        href="/cv/My_CV.pdf"
        download
        className={styles.cvButton}
        whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(255,69,0,0.9)" }}
        whileTap={{ scale: 0.95 }}
      >
        📄 Download CV
      </motion.a>

      <div className={styles.socialLinks}>
        {socialLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
            whileHover={{
              scale: 1.3,
              rotate: 10,
              color: item.color,
              textShadow: `0 0 15px ${item.color}`,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ color: "#aaa" }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
