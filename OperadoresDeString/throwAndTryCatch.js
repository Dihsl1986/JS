// Trow 

function sayMyName(name = '') {
    if(name === ''){
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

//Try...catch

try {
    sayMyName('Diego')
} catch(e) {
    console.log(e)
}

console.log('após a função de erro.')

