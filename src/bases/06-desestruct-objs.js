const person = {
    name: "Tony",
    age: 45,
    codeName: 'Iron Man'
}

const { age, name, codeName, power  = "No tiene poder" } = person


/* Impresión por partes */
/* 
console.log(name)
console.log(age)
console.log( codeName)
console.log(power)
*/

/* Desestructuración de una función */

/* *Desestructuración en una linea  */
const createHero = ( { name, age, codeName, power = "Sin poderes"} ) => ({id: 12345, name, age, codeName, power})

/* *Desestructuración en función completa
const createHero = ( { name, age, codeName, power = "Sin poderes"} ) => {
    
    return{
        id: 12345,
        name,
        age,
        codeName,
        power
    }
}
*/
console.log( createHero(person) )
