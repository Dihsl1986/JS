// for of 

//for ... of serve tanto pra strings quanto para arrays também

 let name = 'Diego' 
 let names = ['David', 'Valentina', 'Pedro']

 //for(let char of name){
 //    console.log(char) //Neste caso vai imprimir o nome soletrado da variavel name
 //}

 //for(let char of name){
   // console.log(char) // Já neste vai imprimir tudo que esta dentra da array na variavel names
//}


for(let name of names){
    console.log(name) // neste caso ele vai atribui cada variável dentro da array names para name.
}
 