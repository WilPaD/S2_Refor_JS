
/* 
import { owners } from './data/heroes'

const [ dc, marvel ] = owners
console.log(dc)
console.log(marvel) 
*/

import heroes from './data/heroes'
import superHeroes from './data/heroes'


const getHeroById = ( id ) => superHeroes.find(hero => hero.id === id)

console.log(getHeroById(3))

const getHeroesByOwner = ( id ) => superHeroes.filter(element => element.owner === id)

console.log(getHeroesByOwner('Marvel'))