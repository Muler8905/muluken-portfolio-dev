import { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import styles from './styles/Header.module.css';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper for scrolling to a section smoothly
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, navigate there first, then scroll
      navigate('/');
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.shrink : ''}`}>
      <div className={styles.inner}>
        {/* --- Logo Section --- */}
        <div className={styles.logo}>
          <Link
            to="/"
            className={styles.brand}
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              setTimeout(scrollToTop, 100);
            }}
          >
            <img src="assets/HomePageLogo.png" alt="Logo" />
          </Link>
        </div>

        {/* --- Navigation --- */}
        <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ''}`}>
          {/* Home sections */}
          {['about', 'projects', 'testimonials', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item)}
              className={`${styles.navLink} ${
                location.hash === `#${item}` ? styles.active : ''
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          {/* Blog route (separate page) */}
          <Link
            to="/blog"
            className={`${styles.navLink} ${
              location.pathname === '/blog' ? styles.active : ''
            }`}
          >
            Blog
          </Link>

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
