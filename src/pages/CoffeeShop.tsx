import styles from "../components/hero/Hero.module.css";
import stylesAbout from "../components/about/About.module.css";
import AboutSection from "../components/cofeeSection/CofeeSection";
import Location from "../components/location/Location";

import menu from "../assets/menu.jpg";
import place from "../assets/place.jpg";

import { Helmet } from "react-helmet-async";

const about = [
  {
    title: "Simple",
    description:
      "It’s simple and convenient — you come to wash your car, and at the same time, get a chance to sit down and relax instead of waiting around in your car",
  },
  {
    title: "Cozy",
    description:
      "A cozy vibe, great coffee made from quality beans, and a team that knows what they’re doing. Sometimes all you need is five minutes to reset",
  },
];

export default function CofeeShop() {
  return (
    <>
      <Helmet>
        <title>Aussieautowash - Car Wash Coffee Shop</title>
        <meta
          name="description"
          content="Welcome to our coffee shop, where the aroma of freshly ground coffee meets the care for your car."
        />
        <meta
          name="keywords"
          content="Car Wash Coffee Shop, coffee, coffee shop, espresso, latte, pastries, café, coffee blends"
        />
      </Helmet>
      <section className={styles.CofeeShopHeroSection}>
        <div className={styles.overlay}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>
              Car Wash Coffee Shop — Good Coffee While You Wait
            </h1>
            <p className={styles.subtitle}>
              Our little coffee spot is located right at the car wash — the
              perfect place to take a breather. Warm, aromatic, and a welcome
              pause in your day.
            </p>
          </div>
        </div>
      </section>
      <section className={stylesAbout.whySection}>
        <div className={stylesAbout.container}>
          <h2 className={stylesAbout.aboutTitle}>Why Stop By</h2>

          <div className={stylesAbout.cofeeGrid}>
            {about.map((feature) => (
              <div key={feature.title} className={stylesAbout.featureCard}>
                <p>
                  <b>{feature.title}</b>
                </p>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AboutSection
        imageSrc={menu}
        title1="What’s on the Menu"
        text1="We’ve got coffee for every taste: espresso, cappuccino, latte, raff, iced options, and even hot chocolate. Just tell us what you’re in the mood for — we’ve got you."
        text2="Feeling hungry? Fresh pastries, desserts, sandwiches, and natural juices are always ready to go. Quick, tasty, and satisfying."
      />

      <AboutSection
        imageSrc={place}
        title1="Warm, Clean, and Peaceful"
        text1="We’ve set up the space so you’ll actually want to stay a little longer. It’s a spot where you can scroll your phone, get some work done, or just do nothing — and that’s totally fine."
        text2="Outlets, Wi-Fi, soft lighting, and music that doesn’t get on your nerves. Simple stuff — but it all makes you feel at home while we take care of your car."
        reverse
      />
      <Location />
    </>
  );
}
