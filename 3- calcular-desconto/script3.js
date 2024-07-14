function Calcular(){
    let VI = document.getElementById("venda").value;
    let OS = document.getElementById("pagamento").value;
    const VT = document.getElementById('resultado_venda');

    if (VI == '' || OS == '') {
        alert('Você precisa preencher todos os dados!');
    }

    if (OS == 'avista') {
        VT.innerText = `R$ ${parseFloat(VI) - (0.05 * parseFloat(VI))}`;
    } else {
        VT.innerText = `R$ ${parseFloat(VI)}`;
    }

}       