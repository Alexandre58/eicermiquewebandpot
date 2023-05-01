import React, { useCallback, useRef } from "react";
import styles from "../styles/_formulaire.module.scss";
//en dessous du code deuxieme formulaire provient de vitrine projet 4(ne fonctionne pas ici ?!)
const Formulaire = () => {
  const firstname = useRef();
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  console.log("**********************************");
  console.log(firstname);
  console.log("**********************************");
  console.log(email);
  console.log("**********************************");
  console.log(password);
  console.log("**********************************");
  console.log(confirmpassword);
  console.log("**********************************");

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        firstname: firstname.current?.value,
        email: email.current?.value,
        password: password.current?.value,
        confirmpassword: confirmpassword.current?.value,
      };
      console.log("***clic button**log data**********");
      console.log(data);
      console.log("**********************************");
    },
    []
  );

  return (
    <>
      <form
        className={styles.formulaire_form_container}
        onSubmit={formHandler()}
      >
        <div className={styles.formulaire_form_label_input}>
          <label className="text-gray" htmlFor="firstname">
            firstname
          </label>
          <input
            ref={firstname}
            id="firstname"
            placeholder="Full name"
            type="text"
            className="shadowappearance"
          />
        </div>
        <div className={styles.formulaire_form_label_input}>
          <label className="text-gray" htmlFor="email">
            Email
          </label>
          <input
            ref={email}
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
            ref={password}
            id="password"
            placeholder="Password"
            type="password"
            className="shadowappearance"
          />
        </div>
        <div className={styles.formulaire_form_label_input}>
          <label className="text-gray" htmlFor="confirmpassword">
            Password Confirmation
          </label>
          <input
            ref={confirmpassword}
            id="confirmpassword"
            placeholder="Password Confirmation"
            type="password"
            className="shadowappearance"
          />
        </div>
        <input
          className={styles.formulaire_form_input_button}
          type="submit"
          autoComplete="on"
          value="Envoyer"
        />
      </form>
    </>
  );
};
export default Formulaire;
// import { useState, useCallback } from "react";

// const initialUserData = {
//   prenom: "",
//   nom: "",
//   email: "",
//   password: "",
//   confirmpassword: "",
// };

// const Formulaire = () => {
//   console.log("### Refreshing");

//   const [userData, setUserData] = useState(initialUserData);
//   console.log(userData);
//   const updateUserDataHandler = useCallback(
//     (type) => (event) => {
//       setUserData({ ...userData, [type]: event.target.value });
//     },
//     [userData]
//   );

//   const formHandler = useCallback(
//     () => (event) => {
//       event.preventDefault();
//       console.log("***balancer sur la base de donnée***");
//       console.log(userData);
//       console.log("**********************************");
//     },
//     [userData]
//   );

//   return (
//     <>
//       <Navigation />
//       <div className="flexh-screen_container">
//         <h1 className="text-3xl">Signup avec useState, useCallback</h1>
//         <p className="text-3xl_p">
//           Bonne approche du formulaire mais peut se faire avec useRef en projet
//           3 avec un rafraichissement que lorsqu'on clic sur envoyer.
//         </p>
//         <p className="text-3xl_p">
//           Ce formulaire raffraichi le formulaire à chaque tape sur le clavier.
//         </p>
//         <form className="form_container" onSubmit={formHandler()}>
//           <div className="flexflex-colmb-4">
//             <label className="text-gray" htmlFor="prenom">
//               Prenom
//             </label>
//             <input
//               id="prenom"
//               placeholder="prenom"
//               type="text"
//               className="shadowappearance"
//               value={userData.prenom}
//               onChange={updateUserDataHandler("prenom")}
//             />
//           </div>
//           <div className="flexflex-colmb-4">
//             <label className="text-gray" htmlFor="nom">
//               Nom
//             </label>
//             <input
//               id="full_name"
//               placeholder="nom"
//               type="text"
//               className="shadowappearance"
//               value={userData.nom}
//               onChange={updateUserDataHandler("nom")}
//             />
//           </div>
//           <div className="flexflex-colmb-4">
//             <label className="text-gray" htmlFor="email">
//               Votre Email
//             </label>
//             <input
//               id="email"
//               placeholder="Email"
//               type="email"
//               className="shadowappearance"
//               value={userData.email}
//               onChange={updateUserDataHandler("email")}
//             />
//           </div>
//           <div className="flexflex-colmb-4">
//             <label className="text-gray" htmlFor="password">
//               Mot de passe
//             </label>
//             <input
//               id="password"
//               placeholder="Password"
//               type="password"
//               className="shadowappearance"
//               value={userData.password}
//               onChange={updateUserDataHandler("password")}
//             />
//           </div>
//           <div className="flexflex-colmb-4">
//             <label className="text-gray" htmlFor="password_confirmation">
//               Confirmation du mot de passe
//             </label>
//             <input
//               id="password_confirmation"
//               placeholder="Password Confirmation"
//               type="password"
//               className="shadowappearance"
//               value={userData.confirmpassword}
//               onChange={updateUserDataHandler("confirmpassword")}
//             />
//           </div>
//           <input
//             className="bg-blue-500"
//             type="submit"
//             value="envoyer"
//             autoComplete="on"
//           />
//         </form>
//       </div>
//     </>
//   );
// };
// export default Formulaire;
