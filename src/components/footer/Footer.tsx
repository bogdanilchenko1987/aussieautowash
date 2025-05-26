import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const linkBlocks = [
  {
    title: "Links",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Coffee Shop", href: "/cofeeshop" },
    ],
  },
  {
    title: "Policy",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Conditions", href: "/terms" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoText}>Aussie Auto Wash</span>
            </Link>
          </div>

          <div className={styles.links}>
            {linkBlocks.map((block, i) => (
              <div key={i}>
                <p className={styles.columnTitle}>{block.title}</p>
                <ul className={styles.columnList}>
                  {block.items.map(({ label, href }) => (
                    <li key={label}>
                      {href.startsWith("#") ? (
                        <Link to={`/${href}`} className={styles.link}>
                          {label}
                        </Link>
                      ) : (
                        <Link to={href} className={styles.link}>
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
