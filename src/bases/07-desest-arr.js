/* *Desestructuración de arreglos */

const characters = ['Goku', 'Vegeta', 'Trunks']

//En los arreglos importa la posición, por eso usamos la coma, en los objetos no importa
const [ , , t, gt = 'Goten' ] = characters

const [, v ] = characters

console.log( v, t, gt )

const returnArray = ([ letters, numbers ]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray ([ 'XYZ', 4321 ])

console.log(letters, numbers)