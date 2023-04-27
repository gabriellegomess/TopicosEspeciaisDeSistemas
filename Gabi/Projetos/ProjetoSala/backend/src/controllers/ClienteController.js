const Clientes = require("../models/ClienteModel");

module.exports = {
    async read(req, res){
        const clientesList = await Clientes.find();
        return res.json(clientesList);
    },

    async create(req, res){
        const {nomeCliente, cpf, idade, enderecoCliente} = req.body;
        console.log(req.body);

        if(!nomeCliente || !cpf || !idade || !enderecoCliente){
            return res.status(400).json({error: "É necessário preencher todos os campos!"}); 
        }

        const clienteCriado = await Clientes.create({
            nomeCliente,
            cpf,
            idade,
            enderecoCliente
        });
        return res.json(clienteCriado);
    },

    async delete(req, res){
        const {id} = req.params;
        const clienteDeletado = await Clientes.findOneAndDelete({_id : id});
        if(clienteDeletado){
            return res.json(clienteDeletado);
        }
        return res.status(401).json({error: "Cliente não encontrado"});
    },

    async update(req, res){
        const {id} = req.params;
        const {nomeCliente, cpf, idade, enderecoCliente} = req.body;
        const cliente = await Clientes.findOne({_id: id});

        cliente.nomeCliente = nomeCliente;
        cliente.cpf = cpf;
        cliente.idade = idade;
        cliente.enderecoCliente = enderecoCliente;

        await cliente.save();

        return res.json(cliente);
    }

}