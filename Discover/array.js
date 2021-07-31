/*

      * Array (Vetores)-> Um tipo de dado estrutural
            * Uma lista
            * Agrupamento
            


            ["Diego", 36]

            Array é uma estrutura de dados diferente do object pois 
            é uma seguida da outra.
*/

/*console.log([
      "Leite",
      "Ovos",
      "Feijão",
      2,
      3,
      5
]);
*/

/*

      # Tipos de dados
            Conforme o ECMAScript standard temos 9 tipos de daos:
            * Data types
                  * Primitive / Primitive value
                  * Structural
                  * Structural Primitive
                  
                  ## Primitivos -> não é objeto e seu valor não vai sofrer mutação são constantes.

                        * String 
                        * Number
                        * Boolean
                        * Undefined
                        * Symbol
                        * BiInt
                  
                  ## Estruturais

                        * Object -> Tem uma estrutura em sí.
                           * Array
                           * Map
                           * Set
                           * Date
                           * ...
                        
                        * Function
                  ## Primitivo Estrutural / Structural Root Primitive

                        * Null
                        * 
                  
////


*/


///Revisão de Array///

const animals = [
      "cachorro",
      "Leão",
      "Gato",{
            name: "Alfredo",
            age: 3
      }

]

//Acessar valores dentro do array
console.log(animals[2]);
console.log(animals.length); // Aqui acessamos como se estivesse acessando a prorpiedade de um objeto.
                              //Caso não tenha a posicão que eu coloquei vai aparece indefinido.
// mostrar um objeto dentro de uma array

console.log(animals);

