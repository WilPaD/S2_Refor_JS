
const nombre = 'Wilbert'
const apellido = 'Padrón'

const  nombreCompleto = `${nombre} ${apellido}`
/*
* Las `` toman el texto de una manera literal
* se usa el ${variable} para insertar una variable de JS
* lo que permite mejor operaciones para concatenar
*
*/


//console.log(`Resultado: ${ 1 + 5 }`)

function getSaludo( nombre ){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo( nombre ) }`)



