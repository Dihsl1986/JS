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
 



////// Function Hoisting /////

sayMyName()

function sayMyName() { // uma function criada desta forma automaticamente ela cria o hoisting
   console.log("Diego")
}

// quando você faz uma função de uma maneira de expressão
//ela não sofre elvação.

 


///// Arrow Function //////


                  //por ser uma função posso colocar um parametro normalmente 
const sayMyName = (name) => { // <= desta forma de arrow function
   console.log(name) // É o jeito mais simples de escrever uma function expressom
} // não necessáriamente mas eu etribuo ela áuma constante. 
//necessario escreve-la do modo correto por que ela não vai sofrer o hoisting
sayMyName("Diego Santos Lima");

// Se eu invocar esta função sem passar o argumento para ela vai dar como indefinida..
  
*/

////// Callback Function //////

/* É uma função esta passando como parametro para outra function,então
O nome deixa de ser uma valor simples para ser uma função.
significa que quando eu executar essa funtion eu estou passando
um valor que por um acaso é uma function,se é uma function 
preciso executar a função a qualquer momento.
   Significa que vou chamar uma função e depos chamar outra de volta.
   em algum momento dentro dessa função.





function sayMyName(name){ // Registro isso na memoria 
   console.log("Antes de executar a função callback")

   saMyname() // rodou essa funtion

   console.log("Depois de executar a callback")



sayMyName (
   () => {
      console.log("Estou em uma callback")
   }
)

*/

///// Function() Constructor///////

/*  Function() Constructor  

   * Expressão new
   * Criar um novo objeto
   * This keyWord

*/

//function Person(){} // Essa vira uma function contructor
//const Diego = new Person(); // quando uso a expression new seguida da function
                           //vai criar um objeto

//console.log(Diego);
// Quando você da um console log o resultado é o objeto Person

/*
function Person(name) {
   this.name = name //  este this aqui dentro vai sempre referenciar o Diego que esta lá fora.
   this.walk = function() {
      return this.name + " está andando"
   }


}        // e o Diego que esta lá fora sempre vai ser referenciado aqui dentro como This

const Diego = new Person("Diego");
const Valentina = new Person("Valentina");
console.log(Diego.walk()); // Agora o Diego tem uma propriedade chamada name
console.log(Valentina.walk());

let name = new String("Diego");
console.log(name)

*/


let date = new Date("20-06-10")
console.log(date)


//// Temos a expressão new que a gente vai usar na frente da função
///ela vai retornar automaticamente retorna um objeto e dentro da function 
//Person posso fazer um molde deste objeto.
// usando a palavra chave (This) Na construction function colocar o person
//com letra maiuscula não é obrigatório porém  coloca-mos por boa pratica.
//eu tenho diversas funções construturas dentro do javascript.


