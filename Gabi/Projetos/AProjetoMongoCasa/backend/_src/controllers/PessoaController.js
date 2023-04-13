const Pessoas = require("../models/PessoaModel");
module.exports = {
    async read(req, res){
        const pessoasList = await Pessoas.find();
        return res.json(pessoasList);
    },
//cpf, nome, idade, salario
    async create(req, res){
        const {cpf, nome, idade, salario} = req.body;

        if(!cpf || !nome || !idade || !salario ){
            return res.status(400).json({error: "É necessário preencher o CPF, Nome, Idade e Salário!"});
        }

        const pessoasCriada = await Pessoas.create({
            cpf,
            nome,
            idade,
            salario
        });
        return res.json(pessoasCriada);
    },

    async delete(req, res){
        const {id} = req.params;
        const pessoaDeletada = await Pessoas.findOneAndDelete({_id : id});
        if(pessoaDeletada){
            return res.json(pessoaDeletada);
        }
    },

    async update(req, res){
        const {id} = req.params;
        const{cpf, nome, idade, salario} = req.nody;
        const pessoa = await Pessoas.findOne({_id : id});

        pessoa.cpf = cpf;
        pessoa.nome = nome;
        pessoa.idade = idade;
        pessoa.salario = salario;

        await anotacao.save;

        return res.json(pessoa);
    }
}