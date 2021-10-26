    // Os parametros da variável dentro do parametro.
    function calcularPreco(nomeProduto = "Produto",valor = precoProduto ) {
       
        Produto = nomeProduto;  // Vai receber o nome do produto
        precoProduto = valor; //Vai receber valor do produto
        Promocao = ((precoProduto * 2) + (precoProduto * 0.5)).toFixed(2); //Calcula a valorda promoção
        precoDoProduto3 = (precoProduto * 0.5).toFixed(2); //Calcula o promoção do treceiro produto.

    }

    calcularPreco("Arroz",17.00);
    
    console.log(("Promoção:"),(Produto),("leve 3 por R$:"),(Promocao)); //Vai imprimir o preço da promoção d produto.
    console.log(("O 3º sai por R$:"),(precoDoProduto3)); ///Vai imprimir o valor do terceio remédio da promoção
    console.log(("Preço da integral"),(precoProduto)); // Vai imprimiro preço integral do produto.
    
    




