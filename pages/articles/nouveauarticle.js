import React from "react";
import { useRouter } from "next/router";
import LinkRetour from "@/components/Linkretour";
import styles from "../../styles/_atelier.module.scss";
import AsideNav from "@/components/AsideNav";
import Head from "next/head";
const NouvelleArticle = () => {
  const router = useRouter();
  return (
    <section className={styles.atelier_section_container}>
      <Head>
        <title>News, news, news.</title>
        <meta
          name="description"
          content="Les nouveaux articles, tout sur les techniques nouvelles, sur les expositions, les documentations."
        />
      </Head>
      <div className={styles.atelier_div_container}>
        <h1 className={styles.atelier_section_h1}>NEWS</h1>
        <LinkRetour retour="Retour" />
      </div>
      <article className={styles.atelier_section_article}>
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
      <article className={styles.atelier_section_article}>
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
      <article className={styles.atelier_section_article}>
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
      <article className={styles.atelier_section_article}>
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
      <article className={styles.atelier_section_article}>
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
      <article className={styles.atelier_section_article}>
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
      <article className={styles.atelier_section_article}>
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
};

export default NouvelleArticle;
