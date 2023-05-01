import React from "react";
import styles from "../styles/_atelier.module.scss";
const Headers = ({ title }) => {
  return (
    <div className={styles.atelier_div_container}>
      <h1 className={styles.atelier_section_h1}>{title}</h1>
    </div>
  );
};

export default Headers;
