const Vendas = require("../models/VendaModel");

//FAZER A VENDA RECEBER OS DADOS DO CLIENTE

module.exports = {
    async read(req, res){
        const vendasList = await Vendas.find();
        return res.json(vendasList);
    },

    async create(req, res){
        const {produto, marca, codBarras} = req.body;
        console.log(req.body);

        if(!produto || !marca || !codBarras){
            return res.status(400).json({error: "É necessário preencher todos os campos!"}); 
        }

        const vendaCriada = await Vendas.create({
            produto,
            marca,
            codBarras
        });
        return res.json(vendaCriada);
    },

    async delete(req, res){
        const {id} = req.params;
        const vendaDeletada = await Vendas.findOneAndDelete({_id : id});
        if(vendaDeletada){
            return res.json(vendaDeletada);
        }
        return res.status(401).json({error: "Venda não encontrada"});
    },

    async update(req, res){
        const {id} = req.params;
        const {produto, marca, codBarras} = req.body;
        const venda = await Vendas.findOne({_id: id});

        venda.produto = produto;
        venda.marca = marca;
        venda.codBarras = codBarras;

        await venda.save();

        return res.json(venda);
    }

}