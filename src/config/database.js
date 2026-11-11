//Importa o drive de conexão com o MySql
const mysql = require("mysql2/promise");

const connectionDB = async () => {
  try {
    //Realiza a conexão
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: 3306
    });

    return connection;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = connectionDB;
