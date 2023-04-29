const mongoose = require('mongoose');

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