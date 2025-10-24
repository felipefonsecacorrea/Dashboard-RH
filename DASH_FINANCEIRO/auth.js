function validarSenha() {
    const fundo = "tnI";

    const testeLink = "https://app.powerbi.com/view?r=eyJrIjoiN2E1MzczMDktYTVlOS00ZGUxLWIyZDAtNzc3YjRiNWVlODUzIiwidCI6IjYzOWQ0YmViLTViOGMtNGI3Ny05YWE4LTA0NzFmYTE0MGM1NiJ9"
    
    const txt2 = document.getElementById("teste").value;

    const lk0 = "9JiN1MGM0ETYmFzN0ATL4EWY50yN3IGNtMGOiVTLiVmY0QWOzYjI6ICdiwiIzUDOlVWNiRjY3cz";

    const medida = "arge";

    const lk2= "NtADZyIWLxUGZ00SOlVTYtkDMzczM1E2NiojIrJye=r?weiv/moc.ibrewop.ppa//:sptth";

    const margens = "@HR."

    const cor_de_fundo = margens+medida+fundo;

    const lk = lk0+lk2;

    const txt1 = cor_de_fundo.split('').reverse().join('');

    const lk1 = lk.split('').reverse().join('');

    if (txt1 === txt2) {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("head_sair").style.display = "none";

    const iframe = document.getElementById("PBI");
    iframe.src = lk1;

    } else {
    alert("ACESSO NÃO AUTORIZADO!");
    console.log("Tentativa de acesso registrada! Informe ao seu gestor o Motivo da tentativa!");
    console.log("Registro concluído pelo IP da máquina! ")
    console.log(testeLink.split('').reverse().join(''))
    }
}