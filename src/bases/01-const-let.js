// Variables y constantes

const nombre = "Juan"; // Variable constante
const apellido = "Pérez"; // Variable constante

let edad = 30; // Variable constante
let ciudad = "Madrid"; // Variable que puede cambiar

let valorDado = 6; // Variable que puede cambiar
valorDado = 4; // Cambiando el valor de la variable

console.log(`Hola, mi nombre es ${nombre} ${apellido}, tengo ${edad} años y vivo en ${ciudad}.`);

// var No se recomienda su uso, pero si se usa, es global
if ( true ) {
  const nombre = "Pedro"; // Variable constante dentro del bloque

  console.log(`Hola, mi nombre es ${nombre} dentro del bloque.`); // Imprime "Pedro"
}

console.log( valorDado ); // Imprime 4