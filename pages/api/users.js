import { getCustomers } from "../../connexionsql";

export default async function handler(req, res) {
  const result = await getCustomers();
  res.json(result);
}
