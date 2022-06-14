const express = require("express");
const route = express.Router();
const paginaHome = require("./src/controllers/home");

// Rota da página home
route.get("/", paginaHome.index);

module.exports = route;
