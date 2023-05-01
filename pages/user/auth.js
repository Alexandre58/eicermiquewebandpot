import { useContext, useState } from "react";
import styles from "../../styles/_auth.module.scss";
import { useRouter } from "next/router";
import AsideNav from "@/components/AsideNav";
import LinkRetour from "@/components/Linkretour";

import { UserContext } from "@/context/UserContext";

const Auth = () => {
  //pour recup l'utilisateur
  const [username, setUsername] = useState("");
  //recup de l'utilisateur du context
  const { setUser } = useContext(UserContext);
  //router poue rediriger l'user en cas de deconnection de l'utilisateur
  const router = useRouter();
  const onSumitForm = (e) => {
    e.preventDefault();
    if (username) {
      setUser(username);
      router.push("/");
    }
  };
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const { user } = useContext(UserContext);
  return (
    <section className={styles.profil_section_container}>
      {/** nouveau*/}
      <form
        action=""
        onSubmit={onSumitForm}
        className={styles.formulaire_form_container}
      >
        <div className={styles.formulaire_form_label_input}>
          <label className="text-gray" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            placeholder="Email"
            type="email"
            className="shadowappearance"
          />
        </div>
        <div className={styles.formulaire_form_label_input}>
          <label className="text-gray" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            placeholder="Password"
            type="password"
            className="shadowappearance"
          />
        </div>
        <div className={styles.formulaire_form_label_input}>
          <label>Nom</label>
          <input type="text" onChange={handleChange} />
        </div>
        <button className={styles.formulaire_form_input_button}>Entrer</button>
      </form>
      <div>
        {!user && (
          <div className={styles.profil_div_container}>
            <h1 className={styles.profil_section_h1}>Bienvenu {user}</h1>

            <div className={styles.profil_section_div_link}>
              <LinkRetour retour="Retour" />
            </div>

            <article className={styles.profil_section_article}>
              <h2>Text de {user}</h2>
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
        {user && (
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

export default Auth;
