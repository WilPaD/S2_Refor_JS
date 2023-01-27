/* 18 Promesas
console.log('Inicio')
new Promise( (resolve, reject) => {
    console.log('Cuerpo de la promesa')

    resolve('Promesa resuelta')
})
.then( console.log ) //Con Resolve
.catch( console.log ) //Con Reject 
console.log('Fin')
*/

// 19 Promesas con Argumentos

import {getHeroById} from './08-imp-exp'

const getHeroByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const hero = getHeroById(id)
            if(hero){
                resolve( hero )
            }else{
                reject('Heroe no existe')
            }
            
        }, 1000)
    })
}

getHeroByIdAsync(1)
    .then(h => console.log(`El héroe es: ${ h.name }`))
    .catch( console.log )