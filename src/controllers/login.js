const Login = require("../models/loginModel");
exports.index = (req, res) => {
  res.render("login");
};

exports.register = async (req, res) => {
  const login = new Login(req.body);
  await login.register();

  if (login.erros.length > 0) {
    req.flash("erros", login.erros);
    //salvar sessão para voltar para a página e apresentar a mensagem de erro
    req.session.save(() => {
      return res.redirect("back");
    });
    return;
  }
  res.send(login.erros);
};
