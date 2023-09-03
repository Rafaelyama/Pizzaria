let carrinhoDeCompras = {
  itens: [],
  total: 0,
};

// Função para adicionar uma pizza personalizada ao carrinho
function adicionarAoCarrinho(nome, preco, personalizacao) {
  const pizza = { nome, preco, personalizacao };
  carrinhoDeCompras.itens.push(pizza);
  carrinhoDeCompras.total += preco;

  // Atualizar o carrinho exibido no HTML
  atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho no HTML
function atualizarCarrinho() {
  const carrinhoItens = document.getElementById("carrinho-itens");
  const totalCarrinho = document.getElementById("total-carrinho");
  const contadorCarrinho = document.getElementById("contador-carrinho");

  carrinhoItens.innerHTML = "";
  carrinhoDeCompras.itens.forEach((pizza, index) => {
    const li = document.createElement("li");
    li.textContent = `${pizza.nome} - R$ ${pizza.preco.toFixed(2)}`;
    if (pizza.personalizacao) {
      li.textContent += ` (${pizza.personalizacao})`;
    }
    const button = document.createElement("button");
    button.textContent = "Remover";
    button.onclick = () => removerDoCarrinho(index);
    li.appendChild(button);
    carrinhoItens.appendChild(li);
  });

  totalCarrinho.textContent = `Total: R$ ${carrinhoDeCompras.total.toFixed(2)}`;
  contadorCarrinho.textContent = carrinhoDeCompras.itens.length.toString();
}

// Função para remover uma pizza do carrinho
function removerDoCarrinho(pizzaIndex) {
  if (carrinhoDeCompras.itens.length > pizzaIndex) {
    const pizzaRemovida = carrinhoDeCompras.itens.splice(pizzaIndex, 1)[0];
    carrinhoDeCompras.total -= pizzaRemovida.preco;
    atualizarCarrinho();
  }
}

// Função para processar um pedido (simulação)
function processarPedido() {
  if (carrinhoDeCompras.itens.length === 0) {
    alert('Seu carrinho está vazio. Adicione itens antes de processar o pedido.');
    return;
  }
  
  alert('Pedido processado com sucesso! Total: R$ ' + carrinhoDeCompras.total.toFixed(2));
  carrinhoDeCompras.itens = [];
  carrinhoDeCompras.total = 0;
  atualizarCarrinho();
}

// Função para inicializar o carrinho e contador
function inicializarCarrinho() {
  carrinhoDeCompras = {
    itens: [],
    total: 0,
  };
  atualizarCarrinho();
}

// Chama a função de inicialização quando a página carrega
window.onload = inicializarCarrinho;
