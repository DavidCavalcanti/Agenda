exports.middlewareGlobal = (req, res, next) => {
  res.locals.erros = req.flash("erros");
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsfrError = (err, req, res, next) => {
  // CÓDIGO DO ERRO
  if (err) {
    return res.render("404");
  }

  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken(); // Cria token
  next();
};
