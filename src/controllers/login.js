const Login = require("../models/loginModel");
exports.index = (req, res) => {
  res.render("login");
};

exports.register = (req, res) => {
  res.send(req.body);
};
