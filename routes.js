const express = require("express");
const route = express.Router();
const paginaHome = require("./src/controllers/home");
const paginaLogin = require("./src/controllers/login");

// Rota da página home
route.get("/", paginaHome.index);

//Rotas de  login
route.get("/login/index", paginaLogin.index);
route.post("/login/register", paginaLogin.register);

module.exports = route;
