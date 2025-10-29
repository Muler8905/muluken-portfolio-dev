import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import testimonials from "../data/testimonials";
import styles from "./styles/Testimonials.module.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0); // starting slide index (0 = first card shown)
  const [visibleCount, setVisibleCount] = useState(1); // how many cards visible at once
  const total = testimonials.length;
  const trackRef = useRef(null);

  // Update visibleCount based on viewport width (mobile-first)
  useEffect(() => {
    const getCount = () => {
      if (window.matchMedia("(min-width: 980px)").matches) return 3;
      if (window.matchMedia("(min-width: 640px)").matches) return 2;
      return 1;
    };

    const onResize = () => {
      const newCount = getCount();
      setVisibleCount((prev) => {
        if (prev !== newCount) {
          // adjust index if it's out of range after changing visibleCount
          const maxIndex = Math.max(0, total - newCount);
          setIndex((i) => Math.min(i, maxIndex));
        }
        return newCount;
      });
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [total]);

  // max starting index so last slide shows last visibleCount items
  const maxIndex = Math.max(0, total - visibleCount);

  const next = () => {
    if (total <= visibleCount) return; // nothing to slide
    setIndex((prev) => {
      if (prev >= maxIndex) return 0; // wrap
      return prev + 1;
    });
  };

  const prev = () => {
    if (total <= visibleCount) return;
    setIndex((prev) => {
      if (prev <= 0) return maxIndex; // wrap
      return prev - 1;
    });
  };

  // Amount to shift the track left (percent)
  // Each increment moves by 100 / visibleCount percent
  const shiftPercent = (index * 100) / visibleCount;

  return (
    <section className={styles.testimonials} id="testimonials" aria-label="Testimonials">
  <h2 className={styles.heading}>What clients say</h2>

  <div className={styles.viewport}>
    {/* Left Button */}
    <button
      className={`${styles.controlBtn} ${styles.left}`}
      onClick={prev}
      aria-label="Previous testimonials"
    >
      ‹
    </button>

    {/* Track */}
    <div
      className={styles.track}
      style={{
        transform: `translateX(-${shiftPercent}%)`,
        transition: "transform 450ms cubic-bezier(.2,.9,.2,1)",
      }}
    >
      {testimonials.map((t, i) => (
        <motion.article
          className={styles.card}
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * 0.04 }}
        >
          <div className={styles.meta}>
            <img src={t.photo} alt={t.name} className={styles.photo} />
            <div className={styles.info}>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.title}>{t.title}</div>
            </div>
          </div>
          <p className={styles.quote}>"{t.quote}"</p>
          <div className={styles.rating}>
            {Array.from({ length: t.rating || 5 }).map((_, s) => (
              <span key={s}>★</span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>

    {/* Right Button */}
    <button
      className={`${styles.controlBtn} ${styles.right}`}
      onClick={next}
      aria-label="Next testimonials"
    >
      ›
    </button>
  </div>
</section>

  );
}
