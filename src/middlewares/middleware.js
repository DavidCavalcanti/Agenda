exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = "Este é o valor da vairável local"; //Pode ser criado funções, arrays, etc.
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsfrError = (err, req, res, next) => {
  // CÓDIGO DO ERRO
  if (err && err.code === "EBADCSRFTOKEN") {
    return res.render("404");
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken(); // Cria token
  next();
};
