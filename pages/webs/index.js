import AsideNav from "@/components/AsideNav";
import React from "react";
import styles from "../../styles/_atelier.module.scss";
import LinkRetour from "@/components/Linkretour";
import Image from "next/image";
import img6 from "../../public/images/img6.jpg";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Head from "next/head";
import Headers from "@/components/Headers";
import { useRouter } from "next/router";
export default function Web({ webs }) {
  const router = useRouter();
  console.log(webs);
  if (router.isFallback) {
    <h1>Data is loading</h1>;
  }
  return (
    <section className={styles.atelier_section_container}>
      <Head>
        <title>Le Web</title>
        <meta
          name="description"
          content="Développement de sites webs sur mesure, adapté aux artisans, site rapide et fiable. Les dernieres technologies au service de l'artisanat."
        />
      </Head>
      <div className={styles.atelier_div_container}>
        <Headers title={"Les sites webs"} />
        <LinkRetour retour="Retour" />
      </div>
      <article className={styles.atelier_section_article}>
        <Image
          className={styles.web_Images}
          src={img6}
          alt="Picture of the author"
          width={1847}
          height={876}
        />
        <h2>Liste des sites prêt à l&prime;emploi</h2>
        {webs.map((web) => {
          return (
            <div key={uuidv4()} className={styles.atelier_section_web_map}>
              <Link href={`/webs/${web.id}`} passHref>
                <p>Site:{web.id}</p>
                <p>TITRE: {web.title}</p>
              </Link>
            </div>
          );
        })}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          incidunt ratione autem quaerat! Omnis at possimus accusamus ab ea
          fugiat excepturi labore! Ex minus optio non consequuntur, tenetur
          cupiditate provident! Facere nobis odit asperiores officia qui ducimus
          illum consequatur ut suscipit repudiandae? Vero beatae aut, eaque
          nobis cumque ullam optio, facere corporis natus at, repellendus quam
          repudiandae nisi labore dolor! Corporis quae non blanditiis impedit
          dolor dignissimos maiores saepe commodi nam libero ratione eos,
          aspernatur deserunt quo in
        </p>
      </article>
      <AsideNav />
      <LinkRetour retour="Retour" />
    </section>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      webs: data.slice(0, 10),
    },
  };
}
