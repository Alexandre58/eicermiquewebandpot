import AsideNav from "@/components/AsideNav";
import LinkArticles from "@/components/LinkArticles";
import React from "react";
import styles from "../../styles/_atelier.module.scss";
import img9 from "../../public/images/img9.jpg";
import Image from "next/image";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
const Article = ({ articles }) => {
  const router = useRouter();

  if (!router.isFallback && !articles) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <section className={styles.atelier_section_container}>
      <Head>
        <title>article personnel</title>
        <meta
          name="description"
          content="Articles de chaques potier rédigés par leurs propre mots et leurs propre images.Leurs adresses est également disonible si vous passez dans leurs régions."
        />
      </Head>
      {articles?.map((article) => {
        return (
          <>
            <div key={uuidv4()} className={styles.atelier_div_container}>
              <h1 className={styles.atelier_section_h1}>{article.username}</h1>
            </div>
            <article className={styles.atelier_section_article}>
              <p>
                Découvrez l&prime;article de
                <strong>
                  {article.firstname} {article.name}
                </strong>
              </p>
              <p>
                <strong>{article.username}</strong>
              </p>
              <p>{article.comment}</p>
              <Image
                className={styles.atelier_Images}
                src={img9}
                alt="Picture of the author"
                width={2400}
                height={3408}
                placeholder="blur"
              />
            </article>
          </>
        );
      })}

      <LinkArticles retour="Retour  liste d'article" />
      <AsideNav />
    </section>
  );
};

export default Article;

export async function getStaticProps(context) {
  const { params } = context;
  //attention backtick dans le fetch
  const res = await fetch(
    `http://localhost:3000/api/users/${params.articleId}`
  );
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { articleId: "74" } }],
    fallback: true,
  };
}
