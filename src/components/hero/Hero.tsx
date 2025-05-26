import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.overlay}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            Your Car, Our Care – Premium Wash in Minutes
          </h1>
          <h2 className={styles.subtitle}>
            Fast, affordable, and eco-friendly car wash services across
            Australia. Drive in dirty, drive out shining – no booking needed!
          </h2>
          <div className={styles.buttonWrapper}>
            <a href="#locations" className={styles.button}>
              Find a Location
            </a>
            <a
              href="#pricing"
              className={styles.button}
              style={{ marginLeft: "1rem" }}
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
