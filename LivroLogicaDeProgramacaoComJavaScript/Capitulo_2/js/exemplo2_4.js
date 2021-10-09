function calcularPreco() {
    //Criar uma referencia ao elemnto da paginando
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var inValor = document.getElementById("outValor");

    //Obtém conteúdo dos campo de entrada
    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    //Calcula valor a ser pago
    var valor = (quilo/1000) * consumo;

    //Altera o conteúdo da linha de resposta.
    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

// Cria referencia ao btCalcular
var btCalcular = document.getElementById("btCalcular");

//Registra um evento associado ao botão.
btCalcular.addEventListener("click", calcularPreco)