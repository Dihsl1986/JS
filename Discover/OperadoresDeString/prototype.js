/// Um panorama sobre prototype

      /* prototype-based language
         prototypeChain
         __Proto__



         A maioria dos tipos de dados são encapsulados por objetos
         ou seja vão ter seu prototipoe vão herdar toda cadeia de prototipo

         ex: 23. Qualquer número que eu colocar o . ele ja espera que seja um numero floa/real
         então coloco 23.0.__proto__
         
         ai sim ele ja está encapsulado num objeto que vai herdar as propriedades
         .
      */


// Type coersion javascript força a transfomação de um number para um tipo string
//para que o programa não de problemas
//console.log("9" + 5); // o resultado é 95


//// Type conversion com a palavra chave Number eu transformo
//// a string em number e tenho o resultado da soma. 
//console.log(Number("9") + 5); ///

//Manipulando Strings e números
// Transformar string em Números e números em string

//let string = "123";
//console.log (Number(string))

//let number = 321;
//console.log(String(number));



// Contar quantos caracteres tem uma palavra e quantos digitos tem um número.

//let word = "Parangaricotirimiruaru";
//console.log(word.length);

//let number = 12345678910
//console.log(String(number).length);

//////Transformar um número quebrado com 2 casas decimais e trocar ponto por virgula.

//let number = 345.112342151 //            //Trocar o pornto por virgula 
//console.log(number.toFixed(2).replace(".",",")); //Aqui eu posso atrelar uma função a outra e poderia atrelelar mais por ser um retorno string.
                                  // aqui ele espera receber o numero de casa decimais que eu quero receber.
                                 // to/fixed é atrelada ao objeto number.
                                 //quando uma função é atrelada ao objeto chamaos de objeto.

 ////// Transformar letras minúsculas em maiúscula. faça o contrário disso também. ///////

 //let word = " Eu serei um ótimo programador! "
 //console.log(word.toUpperCase());

 //let name = " Eu SEREI UM [OTIMO PROGRAMADOR!"
 //console.log(name.toLowerCase());  //// Posso colocar uma cadeia de metodos na propriedade de um objeto.


 ///////// Manipulando array e strings /////////

 /* Separe um testo que contém espaços, em um novo array onde cada texto
 é uma posição do array.Depois disso, transforme o array em um texto e onde 
 eram espaços, coloque _
  

 let phrase = "Eu quero evoluir!";
 let myArray = phrase.split(""); //<- split vai receber no argumento oque eu quero separarnesta frase.
 let phraseWithUnderscore = myArray.join(" _ "); //<- join ele vai passar aqui no argumento oque eu quero juntar 
                                                     //vai juntar automatimante uma array 
 console.log(phraseWithUnderscore.toLocaleUpperCase());
 console.log(phrase.includes("y"));//<- metodo includes eu passo pro argumento oque eu quero verifica se eu tenho ou não na frase.

*/


//////// Criando array constructor //////////
//Manipular array


//let myArray = new Array(10);
//let myArray = new Array("a","b","c");
//console.log(myArray);

///////////////// Contar Elementos de uma Array ////////

/* 

Cada elemento de uma array pode ser um tipo de dados diferentes
inclusive uma function.

*/


console.log([
      "a",
      {typy: "arrey"},
      function() {return "Hello"},
][2]()); //para acessar elemento dentro de uma array
            // eu coloco [e o número do elemento que quero ver] e
            // Para ver a function ddentro da array [O número onde a functions estiver dentro da array]()

/// Fazendo array na mão //

//console.log(["a","b","c","d","e","f"].length);

//////// Transformar uma cadeia de caracteres em elementos de uma array //////////
///String para arrays///

//let word ="manipulação"
//console.log(Array.from(word)); 
            // O próprio array já é um objeto disponível
            // de uma maneira global, então, eu posso atrelar á ele um metodo
            //chamado from e dentro do from ele vai esperar como argumento uma 
            //string, no caso o (word) o resultado é que cada um dos
            //caractere da palavra "manipulação", vai virar um elemento de uma array.

////// Manipulando  Arrays /////

let techs = ["html","css","js"]

// Adicionar um item no fim
      techs.push("node.js","flutter");
// Adicionar no começo
      techs.unshift("Go","sql");
// remover do fim
     // techs.pop() //não preciso colocar oque quero remover
// Remover do começo
     // techs.shift() //não preciso colocar oque quero remover
// Pegar somente alguns elementos do array
      //console.log(techs.slice(1,3))
// Remover 1 ou mais items em qualquer posição do array
      //techs.splice(1,2) // <- aqui eu falo quantos elementos eu quero tirar.
// Encontrar a posição de um elemento no array
      let index = techs.indexOf("sql");
// se quiser remover
      techs.splice(index, 1);


 console.log(techs);