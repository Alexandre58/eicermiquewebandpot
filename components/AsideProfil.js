import Link from "next/link";
import styles from "../styles/_asideProfil.module.scss";
import { UserContext } from "@/context/UserContext";
import React, { useContext } from "react";
const AsideProfil = ({ bonjour, profilconnect, textProfil }) => {
  const { user } = useContext(UserContext);
  return (
    <aside className={styles.asideProfil_container_aside}>
      <h1 className={styles.asideProfil_aside_h1}>{bonjour}</h1>
      <h2>{user}</h2>
      <p>{textProfil}</p>
      <Link href={"/user/profil"}>
        <p className={styles.asideProfil_aside_p}>
          {user} {profilconnect}
        </p>
      </Link>
    </aside>
  );
};

export default AsideProfil;
