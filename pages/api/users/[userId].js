import {
  getCustomerById,
  deleteCustomerById,
  createCustomer,
} from "../../../connexionsql";
//ci-dessus import des function du fichier de connexion connexionsql.js
export default async function handler(req, res) {
  //recup par id
  const userId = req.query.userId;
  //method utilisée
  const method = req.method;
  //creation d'une variable pour la recuperation des données utile pour chaque method
  let result;
  //switch pour recup
  switch (method) {
    case "GET":
      result = await getCustomerById(userId);
      res.json(result);
      break;
    case "DELETE":
      result = await deleteCustomerById(userId);
      res.json({
        ...result,
        message: `Client avec id: ${userId} supprimer!!`,
      });
      break;
    case "POST":
      const {
        username,
        firstname,
        name,
        comment,
        email,
        password,
        confirmpassword,
        isadmin,
        dateinscription,
      } = req.body;
      result = await createCustomer(
        userId,
        username,
        firstname,
        name,
        comment,
        email,
        password,
        confirmpassword,
        isadmin,
        dateinscription
      );
      res.json({ ...result, message: `Client avec userId: ${userId} créée` });
      break;
    default:
      res.status(405).end(`Method ${method} n'est pas acceptée !!`);
  }
}
