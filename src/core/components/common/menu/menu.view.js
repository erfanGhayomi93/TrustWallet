import { Container } from "@mui/material";
import React from "react";
import styles from "./menu.module.scss";

export default function MenuView() {
  return (
    <div className={styles.container}>
      <Container maxWidth="md" className={`${styles.menu}`}>
        <div className={styles.logo}>
          <img src="/assets/images/logo.png" alt="" />
          <span className={styles.textLogo}>Trust Wallet</span>
        </div>
        <ul className={styles.menuItems}>
          {data.map((item, ind) => (
            <li className={styles.menuItem} key={ind}>
              {item.label}
              {item.badge && <span className={styles.badge}>{item.badge}</span>}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

const data = [
  { label: "Assets" },
  { label: "Staking" },
  { label: "Earn", badge: "+11% APR" },
  { label: "NFTs" },
  { label: "DApp Browser" },
  { label: "Language" },
];
