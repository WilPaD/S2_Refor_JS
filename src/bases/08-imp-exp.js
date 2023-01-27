
/* 
import { owners } from './data/heroes'

const [ dc, marvel ] = owners
console.log(dc)
console.log(marvel) 
*/

//import heroes from '../data/heroes'
import superHeroes from '../data/heroes'


export const getHeroById = ( id ) => superHeroes.find(hero => hero.id === id)

export const getHeroesByOwner = ( id ) => superHeroes.filter(element => element.owner === id)

/**
 * Esta es la forma de importar y exportar si se encontrase en el index
import { getHeroById, getHeroesByOwner } from "./bases/08-imp-exp" 

console.log( getHeroById(2) )

console.log( getHeroesByOwner('Marvel') )
 */