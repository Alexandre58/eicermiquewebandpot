import Link from "next/link";
import React from "react";
import styles from "../styles/_linkRetour.module.scss";

const LinkArticles = ({ retour }) => {
  return (
    <div>
      <Link href={"/articles"} className={styles.linkRetour_container}>
        <span className="material-symbols-outlined">house</span> {retour}
      </Link>
    </div>
  );
};

export default LinkArticles;
