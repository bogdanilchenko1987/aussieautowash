import React from "react";
import ContactForm from "../components/contactForm/contactForm";
import styles from "./ContactPage.module.css";

const ContactPage: React.FC = () => {
  return (
    <section className={styles.contactPage}>
      <div className={styles.header}>
        <br />
        <h1>Get in Touch</h1>
        <h2>Questions? Feedback? We're Here.</h2>
        <p>
          Whether you're curious about our services, want to leave a suggestion,
          or just say hello — we're happy to hear from you. Use the form below
          to:
        </p>
        <ul>
          <li>Ask a question</li>
          <li>Leave feedback</li>
          <li>Report an issue</li>
          <li>Or simply get in touch</li>
        </ul>
      </div>

      <ContactForm />

      <div className={styles.details}>
        <div>
          <h3>Our Support Team</h3>
          <p>
            You can also contact our customer support team directly:
            <br />
            <strong>Phone:</strong> 1300 555 417
            <br />
            (Mon–Fri, 9:00 AM – 5:00 PM AEST)
            <br />
            <strong>Email:</strong> support@aussieautowash.com
          </p>
        </div>

        <div>
          <h3>Head Office</h3>
          <p>
            Aussie Auto Wash
            <br />
            Level 4, Suite 12
            <br />
            88 Flinders Street
            <br />
            Melbourne VIC 3000
            <br />
            Australia
          </p>
          <small>
            Please note: This is our admin office only. No washing facilities
            on-site.
          </small>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
