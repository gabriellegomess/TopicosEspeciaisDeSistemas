const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/meu-banco-de-dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Erro de conexão com o MongoDB:', err);
});

db.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso!');
});

const clienteSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String
});

const Cliente = mongoose.model('Cliente', clienteSchema);

app.post('/clientes', async (req, res) => {
  const cliente = new Cliente(req.body);
  await cliente.save();
  res.json(cliente);
});

app.get('/clientes', async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
});

const vendaSchema = new mongoose.Schema({
  data: Date,
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  valor: Number
});

const Venda = mongoose.model('Venda', vendaSchema);

app.post('/vendas', async (req, res) => {
  const venda = new Venda(req.body);
  venda.data = new Date();
  venda.cliente = await Cliente.findById(venda.cliente);
  await venda.save();
  res.json(venda);
});

app.get('/vendas', async (req, res) => {
  const vendas = await Venda.find().populate('cliente');
  res.json(vendas);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});