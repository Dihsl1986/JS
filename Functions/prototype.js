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
  */

 let phrase = "Eu quero evoluir!";
 let myArray = phrase.split(""); //<- split vai receber no argumento oque eu quero separarnesta frase.
 let phraseWithUnderscore = myArray.join(" _ "); //<- join ele vai passar aqui no argumento oque eu quero juntar 
                                                     //vai juntar automatimante uma array 
 console.log(phraseWithUnderscore.toLocaleUpperCase());
 console.log(phrase.includes("E"))



 