//importar o model relacionado a este controller
const Anotacoes = require("../models/AnotacaoModel");

module.exports = {
    async read(req, res){
        const anotacoesList = await Anotacoes.find(); //processa oq tem no BD antes e dps salva as informações em anotacoesList
        return res.json(anotacoesList); //retorna pro navegador a lista de anotações q foi pega do BD
    },
}

//get -> read (td q for read vai ser excecutad qnd a requisição for get)
//post -> create (td q for create vai ser excecutado qnd a requisição for post)