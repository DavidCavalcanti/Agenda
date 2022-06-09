exports.paginaContato = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    Idade: <input type="text" name="idade">    
    <button>Enviar</button>
    </form>
    `);
};

exports.trataForm = (req, res) => {
    res.send(`Olá, ${req.body.cliente}! Seus dados foram recebidos. Obrigado por entrar em contato Conosco!`);
};
