import AdresseAteliers from "@/components/AdresseAteliers";
import AsideNav from "@/components/AsideNav";
import LinkRetour from "@/components/Linkretour";
import React from "react";
import styles from "../../styles/_atelier.module.scss";
import img9 from "../../public/images/img9.jpg";
import Image from "next/image";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Headers from "@/components/Headers";
const Atelier = ({ users }) => {
  return (
    <section className={styles.atelier_section_container}>
      <Head>
        <title>Les ateliers de votre région</title>
        <meta
          name="description"
          content="Les ateliers de votre région sont diponibles. Chaque atelier vous invite à visiter virtuellement leurs endroit de fabrication et de vente. Les potiers et céramiste vous attendent pour une visite réel dans leurs ateliers lors de votre passage en France."
        />
      </Head>
      <div className={styles.atelier_div_container}>
        <Headers title={"Les Ateliers"} />
        <div className={styles.atelier_section_div_link}>
          <LinkRetour retour="Retour" />
          <AdresseAteliers title={"Adresse des Ateliers"} />
        </div>
      </div>

      {users.map((user) => (
        <article key={uuidv4()} className={styles.atelier_section_article}>
          <div className={styles.users_section_article_map_div}>
            <Image
              className={styles.atelier_Images}
              src={img9}
              alt="Picture of the author"
              width={2400}
              height={3408}
              placeholder="blur"
            />
            <h1>
              {user.name} {user.firstname}
            </h1>
            <p>Inscrit depuis : {user.dateinscription}</p>
            <h2>{user.username}</h2>
            <p>{user.comment}</p>
            <Link href={`usersAteliers/${user.id}`}>
              <u>
                <span className="material-symbols-outlined">contact_phone</span>
                Contacter cette atelier
              </u>
            </Link>
          </div>
        </article>
      ))}

      <AsideNav />
      <LinkRetour retour="Retour" />
    </section>
  );
};

export default Atelier;
//appel api eiceramique
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
    revalidate: 10,
  };
}
