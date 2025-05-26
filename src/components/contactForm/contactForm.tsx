import React, { useState, useEffect, useRef } from "react";
import styles from "./ContactForm.module.css";
import Modal from "../modal/Modal";

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    formRef.current?.reset();
    setIsValid(false);
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  const handleInput = () => {
    if (formRef.current) {
      const form = formRef.current;
      const name = form["name"] as unknown as HTMLInputElement;
      const email = form["email"] as unknown as HTMLInputElement;
      const message = form["message"] as unknown as HTMLTextAreaElement;

      const isFilled =
        name.value.trim().length >= 2 &&
        email.validity.valid &&
        message.value.trim().length >= 10;

      setIsValid(isFilled);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          onInput={handleInput}
          ref={formRef}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              minLength={2}
              className={styles.input}
              placeholder="Andy"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className={styles.input}
              placeholder="name@example.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className={styles.input}
              placeholder="Let us know how we can help you"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              className={styles.textarea}
              minLength={10}
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <button type="submit" className={styles.button} disabled={!isValid}>
            Send Message
          </button>
        </form>

        {isSubmitted && (
          <Modal message="We will contact You soon!" onClose={closeModal} />
        )}
      </div>
    </section>
  );
};

export default ContactForm;
