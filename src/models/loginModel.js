const mongoose = require("mongoose");

//modelagem dos dados
const LoginSchema = new mongoose.Schema({
  // mandando cofiguração dos dados que queremos
  email: { type: String, required: true },
  senha: { type: String, required: true },   
});

const LoginModel = mongoose.model("Login", LoginSchema); // cria um model por nome Login e passar o esquema utilizado nele

class Login {
  constructor(body) {
    this.body = body;
    this.erros = [];
    this.user = null;
  }
}

module.exports = Login;
