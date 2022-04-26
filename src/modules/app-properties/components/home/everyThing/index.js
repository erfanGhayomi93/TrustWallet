import React from "react";
import styles from "./everyThing.module.scss";
import InventoryIcon from "@mui/icons-material/Inventory";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";

export default function EveryThing() {
  return (
    <div className={styles.EveryThing}>
      <div className="grid">
        <div className={styles.top}>
          <div className={styles.item}>
            <InventoryIcon />
            <p>Buy Crypto With a Card</p>
          </div>
          <div className={styles.item}>
            <CurrencyExchangeIcon />
            <p>Exchange Instantly</p>
          </div>
          <div className={styles.item}>
            <LockOpenIcon />
            <p>Private & Secure</p>
          </div>
        </div>

        <div>
          <h4>You Deserve Easy Access to Cryptocurrencies</h4>
          <p className={styles.lead}>Trust Wallet is for you if you want to</p>

          <div className={styles.bottom}>
            <div className={styles.grid}>
              <div className={styles.box}>
                <CheckCircleIcon />
                <p>Buy Bitcoin in under five minutes</p>
              </div>
              <div className={styles.box}>
                <CheckCircleIcon />

                <p>Easily earn interest on the crypto in your wallet</p>
              </div>
              <div className={styles.box}>
                <CheckCircleIcon />

                <p>See your collectibles. Art & NFTs in one place</p>
              </div>
            </div>

            <div className={styles.grid}>
              <div className={styles.box}>
                <CheckCircleIcon />

                <p>Exchange your crypto without leaving the app</p>
              </div>
              <div className={styles.box}>
                <CheckCircleIcon />

                <p>Track charts and prices within the app</p>
              </div>
              <div className={styles.box}>
                <CheckCircleIcon />

                <p>Keep your crypto safe from hackers & scammers</p>
              </div>
            </div>

            <div className={styles.buttons}>
              <Button className={styles.button} variant="contained">
                Download Now
              </Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
