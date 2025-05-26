import React from "react";
import styles from "./Faq.module.css";

const testimonials = [
  {
    rating: "★★★★★",
    text: "Honestly, it’s just easy. I like doing it myself, and everything works smoothly. No queues, no fuss.",
    author: "— James W.",
  },
  {
    rating: "★★★★★",
    text: "Came by on a Sunday, paid with my phone, car looked brand new in 10 minutes. Super convenient.",
    author: "— Priya D.",
  },
  {
    rating: "★★★★☆",
    text: "Tried it for the first time last week — I was surprised how simple it was. The foam brush was great.",
    author: "— Marco T.",
  },
  {
    rating: "★★★★★",
    text: "Love that I can just show up and get started. No apps, no staff, no weird pressure.",
    author: "— Steph K.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>What Our Customers Say</h1>
        <h2 className={styles.subtitle}>Real People. Real Cars. Real Clean.</h2>

        <div className={styles.table}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.rating}>{item.rating}</div>
              <div className={styles.text}>{item.text}</div>
              <div className={styles.author}>{item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
