//HEAD
import Head from "next/head";

//STYLES
import styles from "../styles/Home.module.scss";
//LINK
import Link from "next/link";
//CARD
import CardArticles from "@/components/CardArticles";
//ROUTER
import { useRouter } from "next/router";
import AsideNav from "@/components/AsideNav";
//IMAGES
import Image from "next/image";
import img1 from "../public/images/img1.jpg";
import img2 from "../public/images/img2.jpg";
import img3 from "../public/images/img3.jpg";
import img4 from "../public/images/img4.jpg";
import img5 from "../public/images/img5.jpg";
import img6 from "../public/images/img6.jpg";
import img7 from "../public/images/img7.jpg";
import img8news from "../public/images/img8news.jpg";
import AdresseAteliers from "@/components/AdresseAteliers";
import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import AsideProfil from "@/components/AsideProfil";

export default function Home({ articles }) {
  console.log(articles);
  const title = articles[0].username;
  const commentaires = articles[0].comment;
  const router = useRouter();
  const { user } = useContext(UserContext);

  if (!router.isFallback && !articles) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>site céramique</title>
        <meta
          name="description"
          content="site de formation, tournage, four céramique, site web de depannage et fabrication d'outillage. Des articles sur la céramique, une liste des ateliers présent en france. Création de sites internet pour les potiers."
        />
      </Head>
      <main className={styles.main}>
        {user && (
          <AsideProfil
            bonjour={"Votre profil"}
            profilconnect={"modifier votre profil"}
            textProfil={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Nesciunt incidunt ratione autem quaerat! Omnis at possimus accusamus ab ea fugiat excepturi labore! Ex minus optio nonconsequuntur, tenetur cupiditate provident! Facere nobis oditolor sit amet consectetur adipisicing elit.Nesciunt incidunt ratione autem quaerat! Omnis at possimus accusamus ab ea fugiat excepturi labore! Ex minus optio nonconsequuntur, tenetur cupiditate provident! Facere nobis odit..."
            }
          />
        )}
        <div className={styles.index_container_h1}>
          <h1>EICERAMIQUE</h1>

          {/** <p>Router ={router.asPath}</p>*/}
        </div>
        <section className={styles.home_section_container}>
          {/**type de card */}
          <Link className={styles.home_Link} href={"/articles"}>
            <Image
              className={styles.home_Images}
              src={img1}
              alt="Picture of the author"
              width={3988}
              height={5982}
              placeholder="blur"
            />
            <CardArticles
              title={"Les articles"}
              description={"Nos articles sur la céramique"}
              commentaire={commentaires + "..."}
            />
          </Link>
          {/** card 2*/}
          <Link className={styles.home_Link} href={"/atelier"}>
            <Image
              className={styles.home_Images_widh_differente_les_ateliers}
              src={img2}
              alt="Picture of the author"
              width={640}
              height={960}
              placeholder="blur"
            />
            <CardArticles
              title="Les ateliers"
              description={articles[0].username}
              commentaire={
                articles[0].comment.slice(0, 150) + "...lire la suite"
              }
            />
          </Link>
          {/**card 3 */}
          <Link className={styles.home_Link} href={"/four"}>
            <Image
              className={styles.home_Images_widh_differente}
              src={img3}
              alt="Picture of the author"
              width={640}
              height={427}
              placeholder="blur"
            />
            <CardArticles
              title="Les Fours"
              description={"Les réparations et les fours innovants"}
              commentaire={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,bonjour a vous bande  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi "
              }
            />
          </Link>
          {/**card 4 */}
          <Link className={styles.home_Link} href={"/tour"}>
            <Image
              className={styles.home_Images}
              src={img4}
              alt="Picture of the author"
              width={640}
              height={427}
              placeholder="blur"
            />
            <CardArticles
              title="Les Tours"
              description={"Les tours Models ?"}
              commentaire={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,bonjour a vous bande  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi "
              }
            />
          </Link>
          {/**card 5 */}
          <Link className={styles.home_Link} href={"/tournage"}>
            <Image
              className={styles.home_Images}
              src={img5}
              alt="Picture of the author"
              width={375}
              height={375}
              placeholder="blur"
            />
            <CardArticles
              title="Le tournage"
              description={"Videos et autre astuces"}
              commentaire={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,bonjour a vous bande  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi "
              }
            />
          </Link>
          {/**card 6 */}
          <Link className={styles.home_Link} href={"/articles/nouveauarticle"}>
            <Image
              className={styles.home_Images}
              src={img8news}
              alt="Picture of the author"
              width={640}
              height={706}
            />
            <CardArticles
              title="nouveaux articles"
              description={"Les derniers articles à voir"}
              commentaire={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,bonjour a vous bande  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi "
              }
            />
          </Link>
          {/**card 7 */}
          <Link className={styles.home_Link} href={"/webs"}>
            <Image
              className={styles.home_Images_widh_differente}
              src={img6}
              alt="Picture of the author"
              width={1847}
              height={867}
            />
            <CardArticles
              title="site internet"
              description={"Créer votre site ... des solutions"}
              commentaire={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,bonjour a vous bande  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi "
              }
            />
          </Link>
          {/**card 8 */}
          <Link className={styles.home_Link} href={"/contact"}>
            <Image
              className={styles.home_Images_widh_differente}
              src={img7}
              alt="Picture of the author"
              width={640}
              height={427}
            />
            <CardArticles
              title="Nous contacter"
              description={"Contact et autres infos"}
              commentaire={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,bonjour a vous bande  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi  ullam optio, facere corporis natus at, repellendus quam repudiandae nisi "
              }
            />
          </Link>
          <AdresseAteliers
            title={
              "Voir l'adresse des ateliers de céramique present sur le site"
            }
          />
        </section>
        <AsideNav />
      </main>
    </>
  );
}

//appel api
export async function getStaticProps() {
  const data2 = await fetch("http://localhost:3000/api/users");
  const articles = await data2.json();
  return {
    props: {
      articles,
    },
  };
}
