const Anotacoes = require("../models/AnotacaoModel");
module.exports = {
    async read(req, res){
        const anotacoesList = await Anotacoes.find();
        return res.json(anotacoesList);
    },
//cpf, nome, idade, salario
    async create(req, res){
        const {cpf, nome, idade, salario} = req.body;
        const anotacaoCriada = await Anotacoes.create({
            cpf,
            nome,
            idade,
            salario
        });
        return res.json(anotacaoCriada);
    }
}