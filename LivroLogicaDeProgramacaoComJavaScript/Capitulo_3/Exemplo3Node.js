 function calcularMedia(nota1, nota2) {
    
    media = (nota1 + nota2) / 2;

    if (media >= 7) {
        return "Você Passou de ano!!";
    } else if (media >= 4) {
        return "Ultima chance você esta de recuperação";
    } else {
        return "Infelizmente você repetiu de ano."
    }
}



console.log(calcularMedia(9.0,8.0),("Sua média é:"),(media));
