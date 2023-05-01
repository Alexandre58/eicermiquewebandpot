import Link from "next/link";
import React from "react";
import styles from "../styles/_linkRetour.module.scss";

const RetourneAdresse = ({ retour }) => {
  return (
    <div>
      <Link href={"/usersAteliers"} className={styles.linkRetour_container}>
        <span className="material-symbols-outlined">shift</span>
        {retour}
      </Link>
    </div>
  );
};

export default RetourneAdresse;
