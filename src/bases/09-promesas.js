import { getHeroById } from "./08-imp-exp";


// const promesa = new Promise( (resolve, reject) => {

//   setTimeout( () => {
//     // console.log('2 segundos después');
//     const hero = getHeroById(2);
//     // console.log(hero);
//     resolve( hero);
//   }, 2000);

// })

// promesa.then( ( heroe ) => {
//   console.log('Hero encontrado', heroe);
// })

const getHeroByIdAsync = ( id ) => {

  return new Promise( (resolve, reject) => {

    setTimeout( () => {
      const p1 = getHeroById( id);
      if (p1) {
        resolve( p1);
      } else {
        reject('Hero not found');
      }
    }, 2000);

  });

}

getHeroByIdAsync(4)
    .then( hero => console.log('Heroe async', hero))
    .catch( err => console.warn(err));