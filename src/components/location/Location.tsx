import React from "react";
import styles from "./Location.module.css";

const locations = [
  {
    title: "Aussie Auto Wash – Preston",
    address: "123 Bell Street, Preston VIC",
    hours: "Open 6:00 AM – 10:00 PM, 7 days",
    features: "Standard & Deluxe Bays, Tap-to-Pay, Wash Card Ready",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.3989471982086!2d144.990345!3d-37.738156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642bcd674fc6d%3A0x2c2adf6c6b10da33!2s123%20Bell%20St%2C%20Preston%20VIC%203072%2C%20Australia!5e0!3m2!1sen!2sau!4v1711277776016",
  },
  {
    title: "Aussie Auto Wash – Reservoir",
    address: "89 High Street, Reservoir VIC",
    hours: "Open 24/7",
    features: "3 Bays, LED Lighting, Spot-Free Rinse, Contactless Payment",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.231628958348!2d145.005067!3d-37.716245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642f27be71cb5%3A0x9a1b28c13e3f2ef8!2s89%20High%20St%2C%20Reservoir%20VIC%203075%2C%20Australia!5e0!3m2!1sen!2sau!4v1711277865410",
  },
  {
    title: "Aussie Auto Wash – Thomastown",
    address: "45 Settlement Road, Thomastown VIC",
    hours: "Open 7:00 AM – 11:00 PM",
    features: "Extra-wide Bays, Foam Brush, Vacuum Area",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.041496053358!2d145.000342!3d-37.687503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642e40940d749%3A0x3bc1a67e8b68a9fb!2s45%20Settlement%20Rd%2C%20Thomastown%20VIC%203074%2C%20Australia!5e0!3m2!1sen!2sau!4v1711277896316",
  },
  {
    title: "Aussie Auto Wash – Heidelberg",
    address: "10 Banksia Street, Heidelberg VIC",
    hours: "Open 6:30 AM – 9:30 PM",
    features: "Prepaid Wash Cards, Modern Equipment, Easy Drive-Thru Layout",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.678663327968!2d145.065789!3d-37.751987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad641bc7cd68511%3A0xd11f6148e9fdf52f!2s10%20Banksia%20St%2C%20Heidelberg%20VIC%203084%2C%20Australia!5e0!3m2!1sen!2sau!4v1711277935171",
  },
];

const Location: React.FC = () => {
  return (
    <section id="locations" className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Find a Location Near You</h1>
        <h2 className={styles.subtitle}>
          4 Convenient Self-Serve Bays — Ready When You Are
        </h2>

        <div className={styles.grid}>
          {locations.map((loc, index) => (
            <div className={styles.card} key={index}>
              <iframe
                src={loc.mapSrc}
                className={styles.map}
                allowFullScreen
                loading="lazy"
                title={loc.title}
              ></iframe>
              <div className={styles.info}>
                <h3>{loc.title}</h3>
                <p>{loc.address}</p>
                <p>{loc.hours}</p>
                <p>
                  <strong>Features:</strong> {loc.features}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
