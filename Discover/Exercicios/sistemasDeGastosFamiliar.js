/* ## Sistemas de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
 *receitas:[]
 *despesas:[]

 Agora crie uma função que irá calcular o total de receitas e despesas e irá
 mostrar se a família estacom o saldo poistivo ou negativo, seguido o valor
 do saldo.

*/

let family = {
    incomes: [480, 1140],
    expenses: [140.00, 200.00, 80, 414.00]
}

function sum(array){
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}


function calculateBalance() {
    const calculateIncomes = sum(family.incomes);
    const calculateExpense = sum(family.expenses)

    const total = calculateIncomes - calculateExpense

    const savedWell = total >= 0

    let balanceText = "negative"
    if (savedWell) {
        balanceText = "positive"
    }

    console.log(`Your balance is ${balanceText}: ${total.toFixed(2)} R$`)
}

calculateBalance();