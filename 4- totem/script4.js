let acompanhamentosSelecionados = [];
let sanduicheSelecionado = "";
let total = 0;

function acompanhamentos() {
    let acompanhamentos = prompt("Selecione os acompanhamentos (separados por vírgula): Maionese, Carne, Queijo, Bacon, Salada");
    acompanhamentosSelecionados = acompanhamentos.split(",");
    acompanhamentosSelecionados = acompanhamentosSelecionados.map((item) => item.trim());
  }


function finalizar() {
  sanduicheSelecionado = document.getElementById("sanduiche").value;
  calcularTotal();
  exibirPedido();
}

function calcularTotal() {
  switch (sanduicheSelecionado) {
    case "frango":
      total = 10.00;
      break;
    case "carne":
      total = 15.00;
      break;
    case "atum":
      total = 21.00;
      break;
    case "ovo":
      total = 20.00;
      break;
  }
  acompanhamentosSelecionados.forEach((acompanhamento) => {
    total += 2.00;
  });
}

function exibirPedido() {
  const pedidoDiv = document.createElement("div");
  pedidoDiv.innerHTML = `
    <h2>Seu pedido:</h2>
    <p>Sanduíche: ${sanduicheSelecionado}</p>
    <p>Acompanhamentos: ${acompanhamentosSelecionados.join(", ")}</p>
    <p>Total: R$ ${total.toFixed(2)}</p>
  `;
  document.body.appendChild(pedidoDiv);
  document.getElementById("total").textContent = total.toFixed(2);
}


