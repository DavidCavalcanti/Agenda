const mongoose = require("mongoose");
const validator = require("validator");

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

  async register() {
    this.valida();
    if (this.erros.length > 0) return; // Se o array erros for maior que 0 existe erro.
    try {
      this.user = await LoginModel.create(this.body);
    } catch (e) {
      console.log(e);
    }
  }

  valida() {
    this.CleanUp();

    //O e-mail precisa ser válido
    if (!validator.isEmail(this.body.email)) this.erros.push("E-mail inválido");

    //A senha precisa ter entre 8 e 12 caracteres
    if (this.body.password.length < 3 || this.body.password.length > 12) {
      this.erros.push(
        "A senha precisa ter no mínimo 8 e no máximo 12 caracteres"
      );
    }
  }

  CleanUp() {
    // Este for limpa os dados do body
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = ""; // Se o que estiver na chave for diferente de string, a tribua vazio a ela
      }

      //Garantir que será eviado apenas o e-mail e senha no body
      this.body = {
        email: this.body.email,
        password: this.body.password,
      };
    }
  }
}

module.exports = Login;
