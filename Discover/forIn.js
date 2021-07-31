// for...in

let person = {
  name: 'Diego',
  age: 35,
  weight: 88.6,
}

for (let property in person) {
  console.log(property)
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}