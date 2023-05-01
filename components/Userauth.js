import React from "react";

const Userauth = ({ user }) => {
  return (
    <div>
      <h2>
        {user.firstname} {user.name}
      </h2>
      <h3>Numero d'atelier: {user.userId}</h3>
      <h4>Email: {user.email}</h4>
      <h4>Commentaire: {user.comment}</h4>
      {user.isadmin ? (
        <h4>Administrateur: Oui</h4>
      ) : (
        <h4>Administrateur: Non</h4>
      )}
      <h4>Date d'inscription: {user.dateinscription}</h4>
    </div>
  );
};

export default Userauth;
