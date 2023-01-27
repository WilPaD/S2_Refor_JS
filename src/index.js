const person = {
    name: "Tony",
    age: 45,
    codeName: 'Iron Man'
}

const { age, name, codeName, power  = "No tiene poder" } = person

console.log(name)
console.log(age)
console.log( codeName)
console.log(power)