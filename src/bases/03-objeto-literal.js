const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 346512,
        lat: 35.123,
        lon: 12.345343
    }
}
/* Aquí persona 2 apunta a la misma referencia de memoria
* que persona, lo cual ambas variables están apuntando al mismo
* lugar y si haces un cambio en persona2, el cambio se hace
* tambien en persona
*/
//const persona2 = persona

/*
* Aquí usando el operador SPREAD (...variable) se hace una copia
* de la variable persona y permite cambiar datos pues no apunta
* al mismo espacio de memoria
*/
const persona2 = { ...persona };

persona2.nombre = 'Wilbert'

console.log(persona)
console.log(persona2)