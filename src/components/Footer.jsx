import styles from './styles/Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {year} Muluken Ugamo. All rights reserved.</p>
      <p>
        Built with React & Vite |{' '}
        <a
          href="https://github.com/Muler8905"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
