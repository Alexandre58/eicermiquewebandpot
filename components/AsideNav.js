import React from "react";
import styles from "../styles/_asideNav.module.scss";
import Link from "next/link";
import Image from "next/image";
import img1 from "../public/images/img1.jpg";
import img2 from "../public/images/img2.jpg";
import img3 from "../public/images/img3.jpg";
import img4 from "../public/images/img4.jpg";
import img5 from "../public/images/img5.jpg";
import img6 from "../public/images/img6.jpg";
import img7 from "../public/images/img7.jpg";

const AsideNav = () => {
  return (
    <aside className={styles.aside_container}>
      <Link href={"/articles"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img1}
          alt="Picture of the author"
          width={3988}
          height={5982}
          placeholder="blur"
        />
        Les articles
      </Link>

      <Link href={"/atelier"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img2}
          alt="Picture of the author"
          width={640}
          height={960}
          placeholder="blur"
        />
        Les ateliers
      </Link>
      <Link href={"/four"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img3}
          alt="Picture of the author"
          width={640}
          height={427}
          placeholder="blur"
        />
        Les fours
      </Link>
      <Link href={"/tour"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img4}
          alt="Picture of the author"
          width={640}
          height={427}
          placeholder="blur"
        />
        Les tours
      </Link>
      <Link href={"/tournage"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img5}
          alt="Picture of the author"
          width={375}
          height={375}
          placeholder="blur"
        />
        Le tournage
      </Link>
      <Link href={"/articles/nouveauarticle"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img1}
          alt="Picture of the author"
          width={3988}
          height={5982}
          placeholder="blur"
        />
        Les news
      </Link>
      <Link href={"/webs"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img6}
          alt="Picture of the author"
          width={1847}
          height={867}
        />
        Le web
      </Link>
      <Link href={"/contact"} className={styles.asideNav_link}>
        <Image
          className={styles.asideNav_Images}
          src={img7}
          alt="Picture of the author"
          width={640}
          height={427}
          placeholder="blur"
        />
        Contact
      </Link>
      <Link href={"/usersAteliers"} className={styles.asideNav_link}>
        Adresse Ateliers
      </Link>
    </aside>
  );
};

export default AsideNav;
