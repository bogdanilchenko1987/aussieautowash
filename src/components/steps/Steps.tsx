import React from "react";
import styles from "./Steps.module.css";

const Steps: React.FC = () => {
  return (
    <section id="how" className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>How It Works</h1>
        <h2 className={styles.subtitle}>
          Wash Your Car, Your Way – In Just a Few Simple Steps
        </h2>
        <p className={styles.intro}>
          Using a self-serve bay is easy, even if it’s your first time. No apps,
          no staff, no stress. Just follow these steps and you’re good to go.
        </p>

        <ol className={styles.stepsList}>
          <li>
            <h3>Step 1 – Drive In</h3>
            <p>
              Pull into an available bay. You don’t need to book ahead — just
              show up when it suits you.
            </p>
          </li>
          <li>
            <h3>Step 2 – Choose Your Payment Method</h3>
            <p>
              You can pay with card, phone, or a prepaid Wash Card. No coins —
              everything’s contactless.
            </p>
          </li>
          <li>
            <h3>Step 3 – Select Your Wash Mode</h3>
            <p>
              Use the control panel in the bay to choose modes like Pre-soak,
              Foam brush, Rinse, etc.
            </p>
          </li>
          <li>
            <h3>Step 4 – Wash at Your Own Pace</h3>
            <p>
              You’re in control. The machine runs based on time, so you only pay
              for what you use.
            </p>
          </li>
          <li>
            <h3>Step 5 – Done and Gone</h3>
            <p>Rinse off, drive out, and enjoy that fresh clean feeling.</p>
          </li>
        </ol>

        <p className={styles.note}>
          <em>
            Not sure what to do? Each location has signs with simple
            instructions – and we’re always improving.
          </em>
        </p>
      </div>
    </section>
  );
};

export default Steps;
