require("dotenv").config({
  path: process.env.NODE_ENV,
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const routes = require("../app/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/v1/controle-filmes", routes);

/**
 * Middleware for invalid routes
 */
app.use((req, res, next) => {
  return res.status(404).json({ message: "Route invalid" });
});

/**
 * Error middleware
 */
app.use((error, req, res, next) => {
  console.log(error);

  return res.status(500).json({
    message:
      "Alguma coisa deu errado. Se o erro persistir, entre em contato com o suporte.",
  });
});

module.exports = app;
