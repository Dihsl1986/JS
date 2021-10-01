function urna(votos) {
    var a = 0
    var b = 0
    var c = 0
    
    votos.forEach(e => {
        if(e === 'A') a++
        if(e === 'B') b++
        if(e === 'C') c++
    })
    
    if(a > b && a > c) {
        return 'A'
    } else if(b > a && b > c) {
        return 'B'
    } else {
        return 'C'   
    }
}



console.log(urna(5,5,5));

