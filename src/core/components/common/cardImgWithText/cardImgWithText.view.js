import { Container } from "@mui/material";
import React from "react";
import styles from "./cardImgWithText.module.scss";

export default function CardImgWithText({ data }) {
  return (
    <Container maxWidth="md">
      <div
        className={styles.root}
        style={{ flexDirection: data.row_reverse ? "row-reverse" : "row" }}
      >
        <div className={styles.cardImg}>
          <img src={`/assets/images/${data.src_img}`} alt="" />
        </div>

        <div className={styles.cardContent}>
          <p className={styles.title}>{data.title}</p>
          <p className={styles.text}>{data.text}</p>
        </div>
      </div>
    </Container>
  );
}
