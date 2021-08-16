//lêr o dado de entrada.
var preco = (60);

//Calcular
var avista = preco - (preco * 0.10) ;
var parcel = preco / 3;

//Exibir na tela
console.log(`Preço: ${preco}`);

console.log(`Avista ${avista.toFixed(2)} ou em 3x de ${parcel.toFixed(2)}`);