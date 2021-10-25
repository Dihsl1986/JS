  //Criar uma referencia ao elemnto da paginando
    
   
   



    function calcularPreco(nomeProduto = "Produto",valor = precoProduto ) {
       
        Produto = nomeProduto;  // Vai receber o nome do produto
        precoProduto = valor; //Vai receber valor do produto
        Promocao = ((precoProduto * 2) + (precoProduto * 0.5)).toFixed(2); //Calcula a valorda promoção
        precoDoProduto3 = (precoProduto * 0.5).toFixed(2);

    }

    calcularPreco("Arroz",17.00);
   
    console.log(("Promoção:"),(Produto),("leve 3 por R$:"),(Promocao));
   
    console.log(("O 3º sai por R$:"),(precoDoProduto3));
    console.log(("Preço da integral"),(precoProduto));
    
    




