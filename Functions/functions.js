// Funções or functions 
//serve para agrupar código e dar significado.
// Também é um tipo de dados.


//Este é o primeiro passo a declaração da função
//function statement

/*function createPhrases() { //<- o js guarda o codigo na memoria registrando a função uma única vez
   console.log("Estudar é muito bom!!");
   console.log("Paciência e persistência");
   console.log("Revisão é a mãe do aprendizado."); 
}

//Para executar a função. rodar,chamar,invocar ou 
//execute, run, call , invoke.
// coloco apena o nome da função junto com (); isso será o suficiente 
//para rodar.
createPhrases(); // <- e aqui ele imprime oque esta dentro dessa função
                  // <- finalizando o código.
                  
                  createPhrases(); 
                  createPhrases(); 
                  createPhrases(); 
                  createPhrases(); 
                  createPhrases(); 
console.log("fim do programa.");*/




const sum = function(number1, number2) {
   total = (number1 + number2)
   return total
   //Quando éla não tem o return ela retorna undefined
}

let number1 = 34;
let number2 = 25;

sum (number1, number2);

console.log(`O número 1 é ${number1}`);
console.log(`O número 1 é ${number2}`);
console.log(`O A soma é ${sum(number1, number2)}`);

