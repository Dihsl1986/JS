function calcularPreco() {
    //Criar uma referencia ao elemnto da paginando
    var inputNomeMedicamento= document.getElementById("inputNomeMedicamento");
    var inputValorDoMedicamento = document.getElementById("inputValorDoMedicamento");
    var outPrecoPromocao = document.getElementById("outPrecoPromocao");
    var outNomeMedicamento = document.getElementById("outNomeMedicamento");
    
    inputNomeMedicamento = inputNomeMedicamento.value;
    var precoDoMedicamento = Number(Math.floor((inputValorDoMedicamento.value) * 2) - 3);

    outNomeMedicamento.textContent = `Promoção de   ${inputNomeMedicamento}`;
    outPrecoPromocao.textContent = `Leve 2 por apenas   ${precoDoMedicamento}`;
}

// Cria referencia ao btCalcular
var btPreco = document.getElementById("btPreco");

//Registra um evento associado ao botão.
btPreco.addEventListener("click", calcularPreco);