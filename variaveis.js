// Declarando variável or declaration assingment

var name ;
let number = 25;
const Diego = false;


  //assingment = atribuição de valores

  name = "Valentina";
  
//
  //Fazendo isso ficamos sabendo que tipo de dado foi colocado na variável  

//com typeof mostra qual o tipo de dado
console.log(typeof name);
console.log(number);
console.log(Diego);

// Agrupando declarações depois eu atribuo valores

let age , isHuman;

age = 18;
isHuman =true;

// Aqui eu estou passando multiplos argumentos para essa função, ou seja aparece na mesma linha.
//console.log(name, age, isHuman);


//Concatenando e interpolando variáveis.
//Escrita de texto + variáveis
//com o sinal de + vvocê vai concatenar string com número
//Concatenando valores

console.log("O " + name + " Tem " + age + " anos." );



//Interpolando valorescom template literal or template strings = crase=``

console.log(`O ${name} tem ${age} anos e é Humano ${isHuman}`);


