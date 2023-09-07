const telaDeResultado = document.getElementById("tela-de-resultado");

function mostrarValoresNaTela(valor) {
  telaDeResultado.innerHTML += valor;
}

function limparUltimoValorDigitado() {
  telaDeResultado.innerHTML = telaDeResultado.innerText.substring(
    0,
    telaDeResultado.innerText.length - 1
  );
}

function limparValoresNatela() {
  telaDeResultado.innerHTML = "";
  resultadoDasOperacoes = 0;
}

function calcularResultado() {
  if (telaDeResultado.innerHTML.length === 0) {
    telaDeResultado.innerHTML += 0;
  } else {
    var resultadoDasOperacoes = eval(telaDeResultado.innerHTML);
    telaDeResultado.innerHTML = "";
    mostrarValoresNaTela(resultadoDasOperacoes);
  }
}
