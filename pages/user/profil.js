import AsideNav from "@/components/AsideNav";
import LinkRetour from "@/components/Linkretour";

import styles from "../../styles/_profil.module.scss";
import { UserContext } from "@/context/UserContext";
import React, { useContext } from "react";
import Formulaire from "@/components/formulaire";

const Profil = () => {
  const { user } = useContext(UserContext);
  return (
    <section className={styles.profil_section_container}>
      <div>
        {user && (
          <div className={styles.profil_div_container}>
            <h1 className={styles.profil_section_h1}>Bienvenu {user}</h1>

            <div className={styles.profil_section_div_link}>
              <LinkRetour retour="Retour" />
            </div>

            <article className={styles.profil_section_article}>
              <h2>Text de {user}</h2>
              <p></p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt incidunt ratione autem quaerat! Omnis at possimus
                accusamus ab ea fugiat excepturi labore! Ex minus optio non
                consequuntur, tenetur cupiditate provident! Facere nobis odit
                asperiores officia qui ducimus illum consequatur ut suscipit
                repudiandae? Vero beatae aut, eaque nobis cumque ullam optio,
                facere corporis natus at, repellendus quam repudiandae nisi
                labore dolor! Corporis quae non blanditiis impedit dolor
                dignissimos maiores saepe commodi nam libero ratione eos,
                aspernatur deserunt quo in
              </p>
            </article>
          </div>
        )}
        {!user && (
          <h1>
            Vous devez vous authentifier. <br />
          </h1>
        )}
      </div>

      <AsideNav />
      <LinkRetour retour="Retour" />
    </section>
  );
};

export default Profil;
