//Crie um algoritmo que transforme as notas do sistema
//númerico para sistema de notas em caracteres tipo A, B, C, D, E, F

/**
 * de 90 para cima = A
 * de 80 a 89      = B
 * de 70 a 79      = C
 * de 60 a 69      = D
 * menor que 60    = E
 */

function getScore(score){
        let scoreA = score >= 90 && score <= 100
        let scoreB = score >= 80 && score <= 89
        let scoreC = score >= 70 && score <= 79
        let scoreD = score >= 60 && score <= 69
        let scoreE = score < 60 && score >= 0

        let scoreFinal //Nota final 

        if (scoreA) {
            scoreFinal = "A"
        } else if (scoreB) {
            scoreFinal = "B"
        } else if (scoreC) {
            scoreFinal = "C"
        } else if (scoreD) {
            scoreFinal = "D"
        } else if (scoreE) {
            scoreFinal = "E"
        } else {
            scoreFinal = "Invalid Note"
        }

        return scoreFinal
}

// Testes támbem feito no caderno em caso de dúvidas.
console.log(getScore(101));
console.log(getScore(-1));
console.log(getScore(0));
console.log(getScore(1));
console.log(getScore(45));
console.log(getScore(60));
console.log(getScore(61));
console.log(getScore(75));
console.log(getScore(85));
console.log(getScore(95));


console.log(getScore(-1));
console.log(getScore(95));
console.log(getScore(85));





