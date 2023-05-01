import React from "react";
import Link from "next/link";
import styles from "../styles/_adresseateliers.module.scss";

const AdresseAteliers = (props) => {
  return (
    <div>
      <Link href={"/usersAteliers"} className={styles.adresseatelier_link}>
        <span className="material-symbols-outlined">shift</span> {props.title}
      </Link>
    </div>
  );
};

export default AdresseAteliers;
