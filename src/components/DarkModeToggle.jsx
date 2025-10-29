import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './styles/DarkModeToggle.module.css';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      aria-label="Toggle dark mode"
      className={styles.toggleBtn}
      onClick={toggleTheme}
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
