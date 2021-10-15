  //Criar uma referencia ao elemnto da paginando
    const inputProduto = document.getElementById("inputProduto");
    const inputPreco = document.getElementById("inputPreco");
    const btnPreco = document.getElementById("btnPreco");
    const outPromocao = document.getElementById("outPromocao");
    const outPrecoDoProduto3 = document.getElementById("outPrecoDoProduto3");



    function calcularPreco() {
        
        let nomeProduto = inputProduto.value;
        let precoProduto = Number(inputPreco.value);

        let precoDaPromocao = ((precoProduto * 2) + (precoProduto * 0.5)).toFixed(2);
        let precoDoProduto3 = (precoProduto * 0.5).toFixed(2);
        
        outPromocao.textContent = `${nomeProduto} Promoção leve 3 por R$: ${precoDaPromocao}`;
        outPrecoDoProduto3.textContent = `O 3º sai por R$: ${precoDoProduto3}`;

    }



//Registra um evento associado ao botão.
btnPreco.addEventListener("click", calcularPreco);