import React from "react";
import styles from "./moreThan.module.scss";

export default function MoreThan() {
  return (
    <div className={styles.morethan}>
      <div className="grid">
        <div className={styles.box}>
          <div className={styles.item}>
            <h5>The most trusted & secure crypto wallet</h5>
            <p>
              Buy, store, collect NFTs, exchange & earn crypto. Join 25 million+
              people using Trust Wallet.
            </p>
            <div className={styles.downloadApp}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.item}>
            <img src="/assets/images/moreThanPic.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
