const express = require("express");
const route = express.Router();
const paginaHome = require("./src/controllers/home");
const paginaContato = require("./src/controllers/contato");

// Rota da página home
route.get("/", paginaHome.paginaHome);
route.post("/", paginaHome.trataPost);

// Rota da página contato
route.get("/contato", paginaContato.paginaContato);
route.post("/contato", paginaContato.trataForm);

module.exports = route;
