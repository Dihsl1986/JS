function converteTemperatura(temperatura, escalaOrigem, escalaDesejada) {
    if(escalaDesejada == 'kelvin') {
        if(escalaOrigem == 'celsius') {
            return temperatura + 273.15
        }
        if(escalaOrigem == 'fahrenheit') {
            let celsius = converteTemperatura(temperatura, 'fahrenheit', 'celsius')
            return celsius + 273.15
        }        
    }
    
    if(escalaDesejada == 'celsius') {
        if(escalaOrigem == 'kelvin') {
            return temperatura - 273.15
        }
        if(escalaOrigem == 'fahrenheit') {
            return (temperatura - 32) / 1.8
        }         
    }
    
    if(escalaDesejada == 'fahrenheit') {
        if(escalaOrigem == 'celsius') {
            return (temperatura * 1.8) + 32
        }
        if(escalaOrigem == 'kelvin') {
            let celsius = converteTemperatura(temperatura, 'kelvin', 'celsius')
            return (celsius * 1.8) + 32
        }          
    }
}
converttemperaturar(23,22,12)
console.log(converttemperaturar)