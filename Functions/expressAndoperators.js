/* Expresssões e Operadores */

/* 
 - Expressions
 - Operators
      Binary
      Unary
      Ternary


*/
            // Foi atribuido o valor 1 para a variável number
//let number = 1 // Expressão É qualquer linha de código que resolve alguma
            //coisa no javascrip ex: let number

// ps Sempre use o ponto e virgula.

//console.log(number + 1); // Operador binário por ser preciso dois
                         // para que o operador neste caso o mais //
                         //esteja entre eles. 

//console.log(--number); // Operador unário só tenho um elemento
                        //então eu coloco um operador na frente dele para
                        //incrementar ou decrementar.

// Operador unário o typeof por exemplo é um operador porque ele esta dizendo pramim
//qual é o tipo do da variavél

//console.log(typeof number);


//Operador ternário vai receber um expressão senão ele não faz nada ex:

//console.log(false ? "Aló" : "Nada");


//////////////// New //////////////////////////////////////

/* new = é uma expressão que serve para criar um objeto
      - left-hand-side expression 
      - criar um novo obsjeto
*/
            //O new vai fazer com que o name crie outro objeto.
let name = new String("Diego"); //uma nova string que vai receber Diego
name.surName = "Santos Lima";
let age = new Number(35);

console.log(name, age); // aqui cada objeto terá suas strings e valores
                        // o new vai criar outro objetoai posso categorizar
                        // conforme oque ja temos no javascript.


let date = new Date("2021-06-15");
console.log(date);
//console.log(date.__proto__);

 //ps: a idéia da expressão new é criar um novo objeto.

 /*Operadores unários
            typeof  // voi saber qual é o tipo de dado que estou querendo.
            delete // ele vai procurar uma propriedade dentro do objeto e vai deleta-la.
                  // desde que exista tal propriedade.

            */

const person = {
      name: "Diego Santos",
      age: 35,
}
 delete person.age;
console.log(person);
