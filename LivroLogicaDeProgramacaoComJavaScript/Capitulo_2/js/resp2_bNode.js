function calcularPreco (precoPorMin,tempoDeUso) {

    tempoTotalDeUso = (tempoDeUso / 15);

    precoTotal = (precoPorMin * tempoTotalDeUso).toFixed(2)
    
}

calcularPreco(2.00,240);
console.log(("Total a pagar R$:"),(precoTotal));

