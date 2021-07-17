/** Type conversion (typecasting) vs Type coersion */
//console.log(Number('9') + 5)

/** FALSE 
 * quando um valor é considerado false em contexto 
 * onde um boleano é obrigatório (condicionais e loops )
 * 
 * false
 * 0
 * -0
 * null
 * undefined
 * NaN 
 */
//console.log(true  ? 'verdadeiro' : 'false') 



/**
 * TRUTHY
 * 
 * Quando um valor é considerado true em contextos
 * onde um booleano é obrigatório (condicionais e loops)
 * 
 * true
 * {}
 * []
 * 1
 * 3.23
 * "0"
 * Infinity
 * -Infinity
 */
   console.log({} ? 'verdadeiro' : 'falso')
   console.log([] ? 'verdadeiro' : 'falso')
   console.log(1 ? 'verdadeiro' : 'falso')
   console.log(3.23 == 2 ? 'verdadeiro' : 'falso')
   console.log("0" ? 'verdadeiro' : 'falso')
   console.log("false" ? 'verdadeiro' : 'falso')
   console.log(Infinity ? 'verdadeiro' : 'falso')
   console.log(-Infinity ? 'verdadeiro' : 'falso')