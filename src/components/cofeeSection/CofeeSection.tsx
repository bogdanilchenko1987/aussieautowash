import React from "react";
import styles from "./CofeeSection.module.css";

interface AboutSectionProps {
  imageSrc: string;
  title1: string;
  text1: string;
  text2: string;
  reverse?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  imageSrc,
  title1,
  text1,
  text2,
  reverse = false,
}) => {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt="About visual" className={styles.image} />
        </div>
        <div className={styles.textContent}>
          <div className={styles.textBlock}>
            <h2>{title1}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
