import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './styles/Header.module.css';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.shrink : ''}`}>
      <div className={styles.inner}>
        {/* --- Logo Section --- */}
        <div className={styles.logo}>
          <a href="#hero" className={styles.brand}>
            <img src="assets/HomePageLogo.png" alt="Logo" />
        
          </a>
        </div>

        {/* --- Navigation --- */}
        <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ''}`}>
          {['about', 'projects', 'blog', 'testimonials', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`${styles.navLink} ${
                location.hash === `#${item}` ? styles.active : ''
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <div className={styles.mobileToggle}>
            <DarkModeToggle />
          </div>
        </nav>

        {/* --- Controls: Dark Mode + Burger --- */}
        <div className={styles.controls}>
          <DarkModeToggle />
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
