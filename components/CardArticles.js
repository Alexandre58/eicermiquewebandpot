import React from "react";
import Link from "next/link";

import styles from "../styles/_cardArticles.module.scss";

const CardArticles = ({ title, description, commentaire }) => {
  return (
    <>
      <article className={styles.CardArticles_article}>
        <h2 className={styles.CardArticles_h2}>{title}</h2>
        <h3 className={styles.CardArticles_h3}>{description}</h3>
        <p className={styles.CardArticles_p}> {commentaire}</p>
      </article>
    </>
  );
};

export default CardArticles;
