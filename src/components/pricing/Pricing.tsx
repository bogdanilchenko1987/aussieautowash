import React from "react";
import styles from "./Pricing.module.css";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Flexible Pricing for Self-Service Car Wash
        </h2>
        <p className={styles.subheading}>
          Only pay for the time you use. No bookings, no pressure – just clean
          your way.
        </p>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Standard Bay</h3>
            <p className={styles.price}>$2 per 2 minutes</p>
            <ul>
              <li>High-pressure soap and rinse</li>
              <li>Foam brush</li>
              <li>Spot-free rinse</li>
            </ul>
            <p className={styles.note}>
              Perfect for quick and effective cleaning.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Deluxe Bay</h3>
            <p className={styles.price}>$3 per 2 minutes</p>
            <ul>
              <li>Heated water</li>
              <li>Premium foam</li>
              <li>Wheel and bug remover</li>
            </ul>
            <p className={styles.note}>
              Ideal for a deeper clean or tough jobs.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Wash Cards & Credit Packs</h3>
            <p className={styles.price}>Prepay and Save</p>
            <ul>
              <li>Load $50, get $60 credit</li>
              <li>Use card or key for quick access</li>
              <li>No coins needed</li>
            </ul>
            <p className={styles.note}>
              Great for frequent washers. Fully contactless.
            </p>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <a href="#locations" className={styles.button}>
            Find a Location
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
