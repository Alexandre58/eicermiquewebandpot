const mysql = require("mysql2/promise");

const mysqlConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DBNAMEBASEDEDONNE,
  password: process.env.DB_PASSWORD,
};
/**
 *
 * TODO: IMPLEMENT FUNCTIONALITY TO CLOSE MYSQL CONNECTIONS IN ALL FUNCTIONS
 */
const getCustomers = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute("SELECT * FROM `users`");
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getCustomerById = async (id) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM users WHERE id=${id}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createCustomer = async (
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
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO users(userId,username,firstname,name, comment, email, password, confirmpassword, isadmin, dateinscription) VALUES ("${userId}", "${username}","${firstname}", "${name}", "${comment}", "${email}", "${password}", "${confirmpassword}", "${isadmin}","${dateinscription}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteCustomerById = async (id) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM users WHERE id = ${id};`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const customers = {
  getCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomerById,
};

module.exports = customers;
