import AsideNav from "@/components/AsideNav";
import LinkRetour from "@/components/Linkretour";
import React, { useEffect, useState } from "react";
import styles from "../../styles/_atelier.module.scss";
import { v4 as uuidv4 } from "uuid";
import Userauth from "@/components/Userauth";
import Head from "next/head";
import Headers from "@/components/Headers";

//*********ATTENTION DEUX UTILISATION D APPEL UN ACE GETSTATICPROPS ET L AUTRE AVEC USEEFFECT */
const Contact = ({ users }) => {
  const [userss, setUserss] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:3000/api/users");
      const data = await res.json();
      setUserss(data);
      setLoad(true);
    };
    fetchUsers();
  }, []);
  console.log(userss);
  console.log(users[0].username);

  return (
    <section className={styles.atelier_section_container}>
      <Head>
        <title>Nous contacter</title>
        <meta
          name="description"
          content="Pour toute demande, une page contact à était crée pour vous aider dans vos demarches, vos questions."
        />
      </Head>

      <Headers title={"CONTACT"} />

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
      </article>
      <h2 className={styles.atelier_section_h2}>
        Liste of users de la base de donnée myphpmyadmin methode useEffect
        useState(), voir plus bas avec getStaticProps()
      </h2>

      {userss?.map((usersBaseDeDonnée) => {
        return (
          <div key={usersBaseDeDonnée.id}>
            <h3>{usersBaseDeDonnée.username}</h3>
            <p>
              <strong>
                {usersBaseDeDonnée.firstname} {usersBaseDeDonnée.name}
              </strong>
            </p>
            <p>
              Commentaire: <strong>{usersBaseDeDonnée.comment}</strong>
            </p>
            <p>Date d&apos;inscription: {usersBaseDeDonnée.dateinscription}</p>
            {usersBaseDeDonnée.isadmin ? (
              <h4>Administrateur: Oui</h4>
            ) : (
              <h4>Administrateur: Non</h4>
            )}
          </div>
        );
      })}
      {load ? <h2>{userss[0].name}</h2> : "chargement..."}
      <h2 className={styles.atelier_section_h2}>
        Liste of users avec getStaticProps()
      </h2>
      {users.map((user) => {
        return (
          <div key={uuidv4()}>
            <Userauth user={user} />
          </div>
        );
      })}
      <AsideNav />
      <LinkRetour retour="Retour" />
    </section>
  );
};

export default Contact;
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/users");
  const data2 = await response.json();
  console.log(data2);
  return {
    props: {
      users: data2,
    },
  };
}
