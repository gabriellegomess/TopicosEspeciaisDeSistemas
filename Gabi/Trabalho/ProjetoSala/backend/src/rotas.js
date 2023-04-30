/*const express = require("express");
const rotas = express.Router();
const VendaController = require("./controllers/VendaController");
const ClienteController = require("./controllers/ClienteController");
const ProdutoController = require("./controllers/ProdutoController");

rotas.get('/produtos', ProdutoController.read);
rotas.post('/produtos', ProdutoController.create);
rotas.delete('/produtos/:id', ProdutoController.delete);
rotas.post('/produtos/:id', ProdutoController.update);

rotas.get('/vendas', VendaController.read);
rotas.post('/vendas', VendaController.create);
rotas.delete('/vendas/:id', VendaController.delete);
rotas.post('/vendas/:id', VendaController.update);

rotas.get('/clientes', ClienteController.read);
rotas.post('/clientes/cadastro', ClienteController.create);
rotas.delete('/clientes/:id', ClienteController.delete);
rotas.post('/clientes/:id', ClienteController.update);
*/

const express = require("express");
const router = express.Router();
const ClienteController = require("../controllers/ClienteController");

router.post("/clientes/cadastro", ClienteController.cadastrarCliente);

module.exports = router;


//module.exports = rotas;