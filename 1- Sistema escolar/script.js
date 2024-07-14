function Calcular(){
    const CPcd = document.getElementById("alunos_pcd").value;
    const SPcd = document.getElementById("alunos").value;


    let TA = parseInt(CPcd) + parseInt(SPcd)
    let PA = parseInt(CPcd)/TA*100 

    document.getElementById("percentual_pcd").innerText = PA.toFixed(1);
    document.getElementById("total_alunos").innerText = TA;

}