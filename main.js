let entradaAtual = "";
let resultadoFinal = 0;

const telaDeResultado = document.getElementById("telaDeResultado");

const TeclaNumericaPressionada = document.querySelectorAll(".teclasNumericas");

const teclaLimpar = document.getElementById("teclaLimpar");

teclaLimpar.addEventListener("click", function () {
  entradaAtual = "";
  resultadoFinal = 0;
  mostrarTeclaPressionadaNaTela();
});

TeclaNumericaPressionada.forEach((tecla) => {
  tecla.addEventListener("click", function () {
    entradaAtual += tecla.innerText;
    console.log(tecla);
    mostrarTeclaPressionadaNaTela();
  });
});

function mostrarTeclaPressionadaNaTela() {
  telaDeResultado.value = entradaAtual;
}







/*const tecla1 = Number(document.getElementById("tecla1").innerText);
const tecla2 = Number(document.getElementById("tecla2").innerText);
const tecla3 = Number(document.getElementById("tecla3").innerText);
const tecla4 = Number(document.getElementById("tecla4").innerText);
const tecla5 = Number(document.getElementById("tecla5").innerText);
const tecla6 = Number(document.getElementById("tecla6").innerText);
const tecla7 = Number(document.getElementById("tecla7").innerText);
const tecla8 = Number(document.getElementById("tecla8").innerText);
const tecla9 = Number(document.getElementById("tecla9").innerText);*/
