
var btnCalcular = document.getElementById("btnCalcular");

    function calcularPreco() {
        //Criar uma referencia ao elemnto da paginando
        const inputPrecoPorMin = document.getElementById("inputPrecoPorMin");
        const inputTempoDeUso = document.getElementById("inputTempoDeUso");
        const outResultado = document.getElementById("outResultado");


        let precoPorMin = Number(inputPrecoPorMin.value);
        let tempoDeUso = Number(inputTempoDeUso.value);

        let tempoTotalDeUso = Math.ceil(tempoDeUso / 15);

        let precoTotal = (precoPorMin * tempoTotalDeUso).toFixed(2)
        
        outResultado.textContent = `Total a pagar R$: ${precoTotal}`;

    }



//Registra um evento associado ao botão.
btnCalcular.addEventListener("click", calcularPreco);