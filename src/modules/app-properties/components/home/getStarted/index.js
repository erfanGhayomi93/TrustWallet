import { Button } from "@mui/material";
import React from "react";
import styles from "./getStarted.module.scss";

export default function GetStarted() {
  return (
    <div className={styles.getStarted}>
      <div className="grid">
        <h4 className={styles.title}>Get started in 3 simple steps</h4>
        <p className={styles.text}>It only takes a few minutes</p>
      </div>

      <div className={styles.parentBox}>
        <div className={styles.box}>
          <img
            src="/assets/images/private-home.png"
            alt=""
            width={121}
            height={121}
          />
          <h3>Download Trust Wallet</h3>
        </div>

        <div className={styles.box}>
          <img
            src="/assets/images/private-home.png"
            alt=""
            width={121}
            height={121}
          />
          <h3>Create a new wallet</h3>
        </div>

        <div className={styles.box}>
          <img
            src="/assets/images/private-home.png"
            alt=""
            width={121}
            height={121}
          />
          <h3>Get some crypto</h3>
        </div>
      </div>

      <div className={styles.buttons}>
        <Button variant="contained">Download Now</Button>
      </div>
    </div>
  );
}
