/** Clesius em fahrenheit

Crie uma função que receba uma string em celcius ou fahrenheit
e faça uma transformação de uma unidade para outra.

C = (F - 32) * 5/9
F = C * 9/5 + 32

 */

 //transformDegree(50F)

 function transformDegree(degree) {
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if (!celciusExists && !fahrenheitExists) {
        throw new Error('unidentified degree')
    }
    
    let updateDegree = Number(degree.toUpperCase().replace("F", ""))
                 //Arrow function    //Fluxo ideal vai transformas de fahrenheit para celcius
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'


        //Fluxo alternativo //Transformar celcius para fahrenheit
    if(celciusExists) {
        updateDegree = degree.toUpperCase().replace("C", "")
                 //Arrow function    //Fluxo ideal vai transformas de fahrenheit para celcius
        formula = celcius => celcius * 9/5 + 32 // quado estou na arrow function não preciso do ()
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
     
 }

 try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    //transformDegree('50Z')
 } catch (error) {
     console.log(error.message) //vai fica só a mensagem de erro
 }

