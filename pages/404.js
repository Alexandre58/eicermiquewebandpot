import AsideNav from "@/components/AsideNav";
import LinkRetour from "@/components/Linkretour";
import React from "react";
import styles from "../styles/_atelier.module.scss";
import img9 from "../public/images/img9.jpg";
import Image from "next/image";
const AtelierPageNotFound = () => {
  return (
    <section className={styles.atelier_section_container}>
      <div className={styles.atelier_div_container}>
        <h1 className={styles.atelier_section_h1}>Page introuvable</h1>
        <div className={styles.atelier_section_div_link}></div>
      </div>
      <article className={styles.atelier_section_article}>
        <p>
          <Image
            className={styles.atelier_Images}
            src={img9}
            alt="Picture of the author"
            width={2400}
            height={3408}
            placeholder="blur"
          />
        </p>
      </article>

      <AsideNav />
      <LinkRetour retour="Retour" />
    </section>
  );
};

export default AtelierPageNotFound;
