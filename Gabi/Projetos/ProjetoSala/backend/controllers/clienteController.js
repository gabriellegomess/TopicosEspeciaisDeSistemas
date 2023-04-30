const Cliente = require('../models/clienteModel');

exports.salvarCliente = (req, res) => {
  const cliente = new Cliente({
    nome: req.body.nome,
    cpf: req.body.cpf,
    telefone: req.body.telefone,
    email: req.body.email,
    endereco: req.body.endereco
  });

  cliente.save()
    .then(() => {
      res.status(201).send('Cliente salvo com sucesso!');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erro ao salvar o cliente.');
    });
};