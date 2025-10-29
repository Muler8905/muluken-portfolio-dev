import { useEffect, useRef } from 'react';
import styles from './styles/ParticlesBackground.module.css';

export default function ParticlesBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${4 + Math.random() * 6}s`;
      particle.style.opacity = Math.random();
      container.appendChild(particle);

      setTimeout(() => container.removeChild(particle), 10000);
    };

    const interval = setInterval(createParticle, 400);

    return () => clearInterval(interval);
  }, []);

  return <div className={styles.particles} ref={containerRef}></div>;
}
