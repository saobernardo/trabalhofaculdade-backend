require("dotenv").config({
  path: process.env.NODE_ENV,
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const routes = require("../app/routes");

//Config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/v1/controle-filmes", routes);

//Middleware que irá retorna a página 404 - not found
app.use((req, res, next) => {
  return res.status(404).json({ message: "Route invalid" });
});

// Middleware que irá retornar página de erro
app.use((error, req, res, next) => {
  console.log(error);

  return res.status(500).json({
    message:
      "Alguma coisa deu errado. Se o erro persistir, entre em contato com o suporte.",
  });
});

module.exports = app;
