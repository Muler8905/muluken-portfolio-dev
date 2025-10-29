import { useState } from 'react';
import styles from './styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    setSuccessMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate form submission
    setSuccessMsg('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>Contact Me</h2>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? styles.errorInput : ''}
        />
        {errors.name && <p className={styles.errorMsg}>{errors.name}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.errorInput : ''}
        />
        {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? styles.errorInput : ''}
        />
        {errors.message && <p className={styles.errorMsg}>{errors.message}</p>}

        <button type="submit" className={styles.submitBtn}>Send Message</button>

        {successMsg && <p className={styles.successMsg}>{successMsg}</p>}
      </form>
    </section>
  );
}
