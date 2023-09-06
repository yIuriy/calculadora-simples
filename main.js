let entradaAtual = "";
let displayAtual = [];
let ResultadoFinal = 0;

const telaDeResultado = document.getElementById("telaDeResultado");

const teclaNumericaPressionada = document.querySelectorAll(".teclasNumericas");

const teclaLimpar = document.getElementById("teclaLimpar");

const teclaRaizQuadrada = document.getElementById("teclaRaizQuadrada");

const teclaDividir = document.getElementById("teclaDividir");

const teclaMultiplicar = document.getElementById("teclaMultiplicar");

const teclaSubtrair = document.getElementById("teclaSubtrair");

const teclaSomar = document.getElementById("teclaSomar");

const teclaIgualdade = document.getElementById("calcularResultado")

teclaSomar.addEventListener("click", somarValores);

teclaLimpar.addEventListener("click", function () {
  entradaAtual = "";
  displayAtual = [];
  mostrarTeclaPressionadaNaTela();
});

teclaNumericaPressionada.forEach((tecla) => {
  tecla.addEventListener("click", function () {
    entradaAtual += tecla.innerText;
    console.log(tecla);
    mostrarTeclaPressionadaNaTela();
  });
});

function mostrarTeclaPressionadaNaTela() {
  telaDeResultado.value = entradaAtual;
}

function somarValores(){
  displayAtual = displayAtual[0] + displayAtual[2]
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
