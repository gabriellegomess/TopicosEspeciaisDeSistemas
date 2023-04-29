//criando o servidor
const express = require('express');

//criando e conectando no banco de dados 
const mongoose = require('mongoose');


const cors = require('cors');

const app = express();

//conectando no bando de dados mongodb
//na database vendas 
//dbConfig
mongoose.connect('mongodb://localhost:27017/vendas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//models
const clienteSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
});
//models
const vendaSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  data: Date,
  valor: Number,
});
//models
const Cliente = mongoose.model('Cliente', clienteSchema);
const Venda = mongoose.model('Venda', vendaSchema);

//index
app.use(express.json());
app.use(cors());

//controllers
app.get('/clientes', async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
});

app.post('/clientes', async (req, res) => {
  const cliente = new Cliente(req.body);
  await cliente.save();
  res.json(cliente);
});

app.post('/vendas', async (req, res) => {
  const venda = new Venda(req.body);
  await venda.save();
  res.json(venda);
});

app.get('/vendas', async (req, res) => {
  const vendas = await Venda.find().populate('cliente');
  res.json(vendas);
});

//inicio do servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});