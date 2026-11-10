//Importa o drive de conexão com o MySql
const mysql = require("mysql2/promise");

const connectionDB = async (banco) => {
  try {
    //Realiza a conexão
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: banco,
    });

    return connection;
  } catch (err) {
    console.log(err);
    return false;
  }
}; //function

module.exports = connectionDB;
