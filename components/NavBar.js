import Link from "next/link";
import React, { useContext } from "react";
import styles from "../styles/_navbar.module.scss";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
const NavBar = () => {
  //pour mettre les liens actif pour savoir ou on a cliqué dans la navbar
  const router = useRouter();

  //recuperation du context usercontext
  const { user, setUser } = useContext(UserContext);
  //button quitter
  const quitter = (e) => {
    setUser(null);
  };
  return (
    <>
      <nav className={styles.navbar_Nav_container}>
        <Link
          href={"/"}
          className={
            router.pathname === "/"
              ? styles.navbar_Nav_link_active
              : styles.navbar_Nav_link
          }
        >
          Accueil
        </Link>
        <Link
          href={"/webs"}
          className={
            router.pathname === "/webs"
              ? styles.navbar_Nav_link_active
              : styles.navbar_Nav_link
          }
        >
          Web
        </Link>
        <Link
          href={"/contact"}
          className={
            router.pathname === "/contact"
              ? styles.navbar_Nav_link_active
              : styles.navbar_Nav_link
          }
        >
          Contact
        </Link>
        {user && (
          <Link
            href={"/user/profil"}
            className={
              router.pathname === "/user/profil"
                ? styles.navbar_Nav_link_active
                : styles.navbar_Nav_link
            }
          >
            Profil
          </Link>
        )}

        {!user && (
          <Link
            href={"/user/auth"}
            className={
              router.pathname === "/user/auth"
                ? styles.navbar_Nav_link_active
                : styles.navbar_Nav_link
            }
          >
            Connectez-vous
          </Link>
        )}
        {user && (
          <button onClick={quitter} className={styles.navbar_Nav_link_active}>
            {/**Bonjour...<strong> {user}</strong>. */} Déconnectez-vous
          </button>
        )}
      </nav>
    </>
  );
};

export default NavBar;
