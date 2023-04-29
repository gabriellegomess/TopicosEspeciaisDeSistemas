// Importa o arquivo de produtos
const Produto = require('./models/Produto');

// Cria um novo produto
const meuProduto = new Produto('Notebook', 3000, 'Um ótimo notebook com processador Intel Core i5 e 8GB de RAM.');

// Exibe o nome do produto
console.log(meuProduto.nome);

// Criação do objeto Produto
class Produto {
    constructor(nome, preco, descricao) {
      this.nome = nome;
      this.preco = preco;
      this.descricao = descricao;
    }
  }
  
  // Criação de uma lista de produtos
  const produtos = [];
  
  // Função para cadastrar um novo produto
  function cadastrarProduto(nome, preco, descricao) {
    const produto = new Produto(nome, preco, descricao);
    produtos.push(produto);
    console.log(`Produto ${nome} cadastrado com sucesso!`);
  }
  
  // Função para listar todos os produtos cadastrados
  function listarProdutos() {
    console.log('Lista de produtos:');
    produtos.forEach(produto => {
      console.log(`- ${produto.nome} (Preço: R$ ${produto.preco}, Descrição: ${produto.descricao})`);
    });
  }
  
  // Exemplo de uso
  cadastrarProduto('Notebook', 4500.0, 'Notebook Dell XPS com processador Intel Core i7, 16GB de RAM e SSD de 512GB');
  cadastrarProduto('Smartphone', 2500.0, 'Smartphone Samsung Galaxy S21 com tela de 6.2 polegadas, 128GB de armazenamento e câmera de 64MP');
  listarProdutos();