import React from "react";
import styles from "./footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function FooterView() {
  return (
    <div className={styles.footer}>
      <div className={styles.background}>
        <div className={styles.boxTop}>
          <div className={styles.content}>
            <h5>Get the Trust Wallet app now!</h5>
            <p>The most trusted & secure crypto wallet</p>
          </div>
          <div className={styles.apps}>
            <div className={styles.app}></div>
            <div className={styles.app}></div>
            <div className={styles.app}></div>
          </div>
        </div>
      </div>

      <div className={styles.boxBottom}>
        <div className={styles.icons}>
          <div className={styles.logo}>Trust Wallet</div>
          <div className={styles.socialMedia}>
            <FacebookIcon />
            <FacebookIcon />
            <FacebookIcon />
            <FacebookIcon />
            <FacebookIcon />
            <FacebookIcon />
          </div>
        </div>
        {dataFooter.map((item, ind) => (
          <div key={ind}>
            <h5 className={styles.title}>{item.title}</h5>
            {item.children.map((itemChild, index) => (
              <span className={styles.item} key={index}>
                {itemChild.label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const dataFooter = [
  {
    title: "TRUST WALLET",
    children: [
      { label: "Assets", link: "" },
      { label: "DApp Browser", link: "" },
      { label: "Stablecoins", link: "" },
      { label: "Beta", link: "" },
      { label: "NFTs", link: "" },
      { label: "El Salvador Wallet", link: "" },
      { label: "Crypto Wallet for iOS", link: "" },
      { label: "Crypto Wallet for Android", link: "" },
    ],
  },
  {
    title: "INFORMATION",
    children: [
      { label: "Community", link: "" },
      { label: "Help Center", link: "" },
      { label: "Support", link: "" },
      { label: "DApp Journey", link: "" },
      { label: "Developers", link: "" },
      { label: "Submit DApp", link: "" },
      { label: "Press Kit", link: "" },
      { label: "Terms Of Service", link: "" },
      { label: "Privacy Policy", link: "" },
    ],
  },
  {
    title: "USE CRYPTO",
    children: [
      { label: "Buy Bitcoin with a credit card", link: "" },
      { label: "Buy Ethereum", link: "" },
      { label: "Buy BNB", link: "" },
      { label: "Buy Litecoin", link: "" },
      { label: "Buy TRON", link: "" },
      { label: "Buy XRP", link: "" },
      { label: "Buy Bitcoin Cash", link: "" },
      { label: "Earn Bitcoin", link: "" },
      { label: "Earn Ethereum", link: "" },
      { label: "Earn Binance Coin", link: "" },
      { label: "Earn Cake", link: "" },
    ],
  },
  {
    title: "ASSETS",
    children: [
      { label: "Bitcoin (BTC)", link: "" },
      { label: "Ethereum (ETH)", link: "" },
      { label: "Binance Coin (BNB)", link: "" },
      { label: "Litecoin (LTC)", link: "" },
      { label: "Ripple (XRP)", link: "" },
      { label: "Dogecoin (DOGE)", link: "" },
      { label: "Polkadot (DOT)", link: "" },
      { label: "Smartchain (BNB)", link: "" },
      { label: "Dash (DASH)", link: "" },
      { label: "TRON (TRX)", link: "" },
      { label: "Tezos (XTZ)", link: "" },
      { label: "Cosmos (ATOM)", link: "" },
      { label: "Stellar (XLM)", link: "" },
      { label: "Kava (KAVA)", link: "" },
    ],
  },
];
