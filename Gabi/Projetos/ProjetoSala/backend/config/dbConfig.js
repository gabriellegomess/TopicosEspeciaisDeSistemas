const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projeto', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida!');
  })
  .catch((err) => {
    console.error(err);
  });