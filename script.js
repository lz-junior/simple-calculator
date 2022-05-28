
function show(tipo = null) {


    if (tipo !== null && typeof tipo !== "undefined") {


        var itensAtivos = document.querySelectorAll(".operations > div")

        itensAtivos.forEach(function (items) {
            items.className = "hide";
        });

        var elemento = document.getElementById(tipo);
        elemento.className = "show";

        return;
    }

    alert("Hove um erro ao realizar a operação");

    return;

}


function verificarOpcoes(event = null) {

    var tipo = document.getElementById('selecionar').value;

    switch (tipo) {

        case "soma":

            show(tipo);

            break;

        case "subtrair":

            show(tipo);

            break;

        case "multiplicar":

            show(tipo);


            break;

        case "dividir":

            show(tipo);


            break;

        default:
            break;
    }


}

function somar() {
    var somn1 = window.document.getElementById('somnum1')
    var somn2 = window.document.getElementById('somnum2')
    var somres = window.document.getElementById('somresultado')
    var son1 = Number(somn1.value)
    var son2 = Number(somn2.value)
    var so = son1 + son2
    somres.innerHTML = `A soma entre ${son1} e ${son2} é de <strong>${so}</strong>`
}

function subtrair() {
    var subn1 = window.document.getElementById('subnum1')
    var subn2 = window.document.getElementById('subnum2')
    var subres = window.document.getElementById('subresultado')
    var sun1 = Number(subn1.value)
    var sun2 = Number(subn2.value)
    var su = sun1 - sun2
    subres.innerHTML = `A subtração entre ${sun1} e ${sun2} é de <strong>${su}</strong>`
}

function multiplicar() {
    var muln1 = window.document.getElementById('mulnum1')
    var muln2 = window.document.getElementById('mulnum2')
    var mulres = window.document.getElementById('mulresultado')
    var mun1 = Number(muln1.value)
    var mun2 = Number(muln2.value)
    var mu = mun1 * mun2
    mulres.innerHTML = `A multiplicação entre ${mun1} e ${mun2} é de <strong>${mu}</strong>`
}

function dividir() {
    var divn1 = window.document.getElementById('divnum1')
    var divn2 = window.document.getElementById('divnum2')
    var divres = window.document.getElementById('divresultado')
    var din1 = Number(divn1.value)
    var din2 = Number(divn2.value)
    var di = din1 / din2
    divres.innerHTML = `A divisão entre ${din1} e ${din2} é de <strong>${di}</strong>`
}






