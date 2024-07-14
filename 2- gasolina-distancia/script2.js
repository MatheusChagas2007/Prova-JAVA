function Calcular(){
    const DI = document.getElementById("distancia").value;
    const CM = document.getElementById("consumo").value;
    const PL = document.getElementById("preco").value;
    const NP = document.getElementById("passageiros").value;

    let QG = parseInt(DI) * parseInt(CM)
    let CV = parseInt(PL) * QG 
    let CP = CV / parseInt(NP)

    document.getElementById("resultado_gasolina_litros").innerText = QG;
    document.getElementById("resultado_custo").innerText = CV.toFixed(2);
    document.getElementById("resultado_custo_pessoa").innerText = CP.toFixed(2);
}