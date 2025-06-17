import { heroes } from '../data/heroes';


// const getHeroById = (id) => {
//   return heroes.find( ( heroe) => {
   
//     if ( heroe.id === id ) {
//       return true;
//     } else {
//       return false;
//     }
    
//   });
// }

const getHeroById = (id) => heroes.find( ( heroe) => heroe.id === id)
// console.log( getHeroById(2) );

const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );
// console.log( getHeroesByOwner('DC') );

export {
  getHeroById,
  getHeroesByOwner
}