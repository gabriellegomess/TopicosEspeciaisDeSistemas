const Anotacoes = require("../models/AnotacaoModel");
module.exports = {
    async read(req, res){
        const anotacoesList = await Anotacoes.find();
        return res.json(anotacoesList);
    },

    async create(req, res){
        const {titulo, notas, prioridade} = req.body;

        if(!titulo || !notas ){
            return res.status(400).json({error: "É necessário preencher o um titulo e uma anotação!"});

        }

        const anotacaoCriada = await Anotacoes.create({
            titulo,
            notas,
            prioridade
        });
        return res.json(anotacaoCriada);
    },

    async delete(req, res){
        const {id} = req.params;
        const anotacaoDeletada = await Anotacoes.findOneAndDelete({_id : id});
        if(anotacaoDeletada){
            return res.json(anotacaoDeletada);
        }
    },

    async update(req, res){
        const {id} = req.params;
        const{titulo, notas, prioridade} = req.nody;
        const anotacao = await Anotacoes.findOne({_id : id});

        anotacao.titulo = titulo;
        anotacao.notas = notas;
        anotacao.prioridade = prioridade;

        await anotacao.save;

        return res.json(anotacao);
    }
}