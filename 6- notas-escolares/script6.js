let alunos = [];

function cadastrar() {
  const nome = document.getElementById("nome").value;
  const primeiro = parseFloat(document.getElementById("primeiro").value);
  const segundo = parseFloat(document.getElementById("segundo").value);
  const terceiro = parseFloat(document.getElementById("terceiro").value);
  const quarto = parseFloat(document.getElementById("quarto").value);

  const media = (primeiro + segundo + terceiro + quarto) / 4;

  let status;
  if (media >= 7) {
    status = "Aprovado";
  } else if (media >= 4 && media < 7) {
    status = "Em Recuperação";
  } else {
    status = "Reprovado";
  }

  alunos.push({ nome, media, status });

  document.getElementById("nome").value = "";
  document.getElementById("primeiro").value = "";
  document.getElementById("segundo").value = "";
  document.getElementById("terceiro").value = "";
  document.getElementById("quarto").value = "";
}

function relatorio() {
  const listaAlunos = document.getElementById("lista_alunos");
  listaAlunos.innerHTML = "";

  alunos.forEach((aluno) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${aluno.nome} - ${aluno.status}`;
    listaAlunos.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const cadastrarButton = document.querySelector("button:nth-child(5)");
  const relatorioButton = document.querySelector("button:nth-child(6)");

  cadastrarButton.addEventListener("click", cadastrar);
  relatorioButton.addEventListener("click", relatorio);
});