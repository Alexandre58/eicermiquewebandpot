import Link from "next/link";
import React from "react";
import styles from "../styles/_linkRetour.module.scss";
const LinkRetour = ({ retour }) => {
  return (
    <div>
      <Link className={styles.linkRetour_container} href={"/"}>
        <span className="material-symbols-outlined">house</span> {retour}
      </Link>
    </div>
  );
};

export default LinkRetour;
