function calcularPreco(nome  = "nomeMedicamento" ,valor = valorDoMedicamento) {
    
    valorDoMedicamento = valor
    nomeMedicamento = nome;
    promocaoDoMedicamento = ((valorDoMedicamento * 2) - 3);
    

}

calcularPreco("Alprazolam",10.00);
console.log(("Leve 2 por apenas"),(promocaoDoMedicamento));
console.log(("Promoção de : "),(nomeMedicamento));
console.log(("Sem promoção : "),(valorDoMedicamento));

