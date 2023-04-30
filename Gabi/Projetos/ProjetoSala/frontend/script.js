const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const endereco = document.getElementById('endereco').value;

  const response = await fetch('/clientes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, cpf, telefone, email, endereco })
  });

  if (response.ok) {
    alert('Cliente cadastrado com sucesso!');
  } else {
    alert('Ocorreu um erro ao cadastrar o cliente.');
  }
});