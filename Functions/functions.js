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


/*

const sum = function(number1, number2) {
   let total = (number1 + number2) // nunca colocar variável sem palavra chave como let/var ou const
   return total                // 
   //Quando éla não tem o return ela retorna undefined
}



return : Uma função quando ela encontra um return
imediatamente ela para sua execução e retorna oque vem 
logo á frente.



Quando coloco uma variável sem palavra chave como let/var/const corre
o perigo de ela existir em qualquer lugar na aplicação inteira.

E também evitamos o uso da var





let number1 = 34;
let number2 = 25;

sum (number1, number2);

console.log(`O número 1 é ${number1}`);
console.log(`O número 1 é ${number2}`);
console.log(`O A soma é ${sum(number1, number2)}`);



// Outra maneira de entender funções

function fazersuco(fruit1 , fruit2) {
   return  "Suco de: " + fruit1 + fruit2
}

const copo = fazersuco("banana", "maça");
console.log(copo);



*/

// Estudo sobre escopo de function

let subject  //<- Este tem outro significado.
                  //Não me importa oque eu estou fazendo aqui eu estudy
function creatThink() {// agora se eu não colocar nada nos parametros vai imprimir direto para study.
   subject = " study " // <- o subject dentro do escopo tem um significado

}


console.log(subject);
//console.log(creatThink(subject)); // passando o subject
creatThink(); // passando o subject
console.log(subject);
 



