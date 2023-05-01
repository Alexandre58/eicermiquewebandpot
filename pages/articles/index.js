import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LinkRetour from "@/components/Linkretour";
import styles from "../../styles/_articles.module.scss";
import AsideNav from "@/components/AsideNav";
import img8 from "../../public/images/img8news.jpg";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
const Articles = ({ articles }) => {
  const router = useRouter();

  return (
    <section className={styles.article_section_container}>
      <Head>
        <title>articles eiceramique</title>
        <meta
          name="description"
          content="tous les articles pour la céramique et la poterie, inclus la fabrication de four ,des réparations de four, les ateliers en France et ailleur, des articles sur tout ce qui à rapport avec la céramique, les tours, l'outillage spécifique, le tournage. "
        />
      </Head>
      <div className={styles.article_div_container}>
        <h1 className={styles.article_section_h1}>Articles</h1>
        <LinkRetour retour="Retour" />
      </div>
      <div
        className={styles.article_section_article_div}
        style={{ backgroundImage: `url(${img8.src})` }}
      >
        {articles.map((article) => (
          <article key={uuidv4()}>
            <Link
              className={styles.article_section_article}
              href={`/articles/${article.id}`}
              passHref
            >
              <p>ARTICLE {article.id}</p>
              <p>
                Article édité par {article.name}&nbsp;{article.firstname}
              </p>
              <p>{article.username.slice(0, 150) + " ..."}</p>

              <u> Lire la suite</u>
            </Link>
          </article>
        ))}
      </div>
      <LinkRetour retour="Retour" />
      <AsideNav />
    </section>
  );
};
export default Articles;
//appel api eiceramique
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
  };
}
