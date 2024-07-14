let convidados = [];

function cadastrarConvidado() {
  const nomeConvidado = document.getElementById("convidado").value.trim();
  if (nomeConvidado!== "") {
    if (convidados.length < 10) {
      convidados.push(nomeConvidado);
      document.getElementById("convidado").value = "";
      atualizarListaConvidados();
    } else {
      alert("Lista de convidados cheia! Não é possível cadastrar mais de 10 convidados.");
    }
  }
}

function removerConvidado() {
  const nomeConvidado = prompt("Qual nome você deseja remover?");
  if (nomeConvidado!== null) {
    const indice = convidados.indexOf(nomeConvidado);
    if (indice!== -1) {
      convidados.splice(indice, 1);
      atualizarListaConvidados();
    } else {
      alert("Convidado não encontrado!");
    }
  }
}

function exibirConvidados() {
  atualizarListaConvidados();
}

function atualizarListaConvidados() {
  const listaConvidados = document.getElementById("lista_convidados");
  listaConvidados.innerHTML = "";
  convidados.forEach((convidado, indice) => {
    const item = document.createElement("li");
    item.textContent = `${indice + 1}. ${convidado}`;
    listaConvidados.appendChild(item);
  });
}

document.querySelector("button[type='button']:nth-child(1)").addEventListener("click", cadastrarConvidado);
document.querySelector("button[type='button']:nth-child(2)").addEventListener("click", removerConvidado);
document.querySelector("button[type='button']:nth-child(3)").addEventListener("click", exibirConvidados);