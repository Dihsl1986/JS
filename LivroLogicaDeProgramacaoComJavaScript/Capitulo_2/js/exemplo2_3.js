function mostrarPromocao() {
    // Criar referencia aos elementos manipulados pelo programa.
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    //Obtem conteúdos campos de entrada para
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    //calcula valor da entrada
    var entrada = preco * 0.50;
    var parcela = (preco * 0.50) / 12;

    //altera o conteúdo dos paragrafos de resposta.
    outVeiculo.textContent = "promoção: " + veiculo;
    outEntrada.textContent = "Entrada de r$: " + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}

// Cria uma referencia ao elemento btVerPromacao (button)

var btVerPromocao = document.getElementById("btVerPromocao");

//Registra um evento assiciado ao botão, para carregar uma function.
btVerPromocao.addEventListener("click", mostrarPromocao);
