import React from "react";
import CardImgWithText from "../../../../../core/components/common/cardImgWithText";
import EveryThing from "../../../components/home/everyThing";
import GetStarted from "../../../components/home/getStarted";
import MoreThan from "../../../components/home/moreThan";

export default function HomeView() {
  return (
    <div>
      <MoreThan />
      <EveryThing />
      <CardImgWithText data={buy_home} />
      <CardImgWithText data={exchange_home} />
      <CardImgWithText data={private_home} />
      <CardImgWithText data={browser_home} />
      <GetStarted />
    </div>
  );
}

const buy_home = {
  src_img: "buy-home.png",
  title: "Buy Crypto With a Card",
  text: "Get your first $50 of Bitcoin, Ethereum, Binance Coin and many other cryptocurrencies.",
};

const exchange_home = {
  src_img: "exchange-home.png",
  title: "Exchange Instantly",
  text: "No forms, no selfies. Trade crypto anytime with ease.",
  row_reverse: true,
};

const private_home = {
  src_img: "private-home.png",
  title: "Private & Secure",
  text: "Only you can access your wallet. We don’t collect any personal data.",
};

const browser_home = {
  src_img: "browser-home.png",
  title: "Browser for DApps",
  text: "Use your favourite decentralized apps & find new ones, without leaving your wallet.",
  row_reverse: true,
};
