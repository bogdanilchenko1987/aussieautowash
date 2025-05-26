import React from "react";
import styles from "./About.module.css";

const features = [
  {
    title: "Fast",
    description:
      "Get your car clean in minutes. No waiting, no fuss — just pull in, tap, and wash.",
  },
  {
    title: "Effective",
    description:
      "High-pressure water, premium foam, and pro-grade equipment for a professional finish every time.",
  },
  {
    title: "Convenient",
    description:
      "Open 7 days a week. Contactless payment options. No coins, no complications.",
  },
  {
    title: "Eco-Friendly",
    description:
      "Water-efficient systems and biodegradable soaps that care for your car and the environment.",
  },
  {
    title: "Loyalty Rewards",
    description:
      "Top up your wash card and get bonus credit. Wash more, save more — it's that simple.",
  },
];

const About: React.FC = () => {
  return (
    <section className={styles.whySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Aussie Auto Wash?</h2>
        <p className={styles.subtitle}>
          Smart, Fast and Friendly – Self-Service Done Right
        </p>
        <p className={styles.description}>
          Experience the difference of a modern self-serve car wash that puts
          you in control.
        </p>

        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
