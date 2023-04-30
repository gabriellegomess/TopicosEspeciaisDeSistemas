const Produtos = require("../models/ProdutoModel");

module.exports = {
    async read(req, res){
        const produtosList = await Produtos.find();
        return res.json(produtosList);
    },

    async create(req, res){
        const {titulo, descricao, validade, codigoProduto} = req.body;
        console.log(req.body);

        if(!titulo || !descricao || !validade || !codigoProduto){
            return res.status(400).json({error: "É necessário preencher todos os campos!(titulo, descricao, validade, codigo)"}); 
        }

        const produtoCriado = await Produtos.create({
            titulo,
            descricao,
            validade,
            codigoProduto
        });
        return res.json(produtoCriado);
    },

    async delete(req, res){
        const {id} = req.params;
        const produtoDeletado = await Produtos.findOneAndDelete({_id : id});
        if(produtoDeletado){
            return res.json(produtoDeletado);
        }
        return res.status(401).json({error: "Registro não encontrado"});
    },

    async update(req, res){
        const {id} = req.params;
        const {titulo, descricao, validade, codigoProduto} = req.body;
        const produto = await Produtos.findOne({_id: id});

        produto.titulo = titulo;
        produto.descricao = descricao;
        produto.validade = validade;
        produto.codigoProduto = codigoProduto;

        await produto.save();

        return res.json(produto);
    }

}