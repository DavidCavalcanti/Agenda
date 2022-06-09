require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then(() => {
    app.emit("Pronto");
  })
  .catch((erro) => console.log(erro));
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const routes = require("./routes");
const path = require("path");
const helmet = require("helmet");
const csrf = require("csurf");
const port = 3000;
const {
  middlewareGlobal,
  checkCsfrError,
  csrfMiddleware,
} = require("./src/middlewares/middleware");

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
  secret: "sdfghjlç+654789 qwer qwef asdfd1()",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), //process.env.CONNECTIONSTRING URL de conexão do MongoDB
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // mantem sessão ativa por 7 dias
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsfrError);
app.use(csrfMiddleware);
app.use(routes);

app.on("Pronto", () => {
  app.listen(port, () => {
    console, console.log("Acessar servidor: http://localhost:3000/");
    console.log("Servidor ativo na porta 3000");
  });
});
