

// Desestructuracion
// Asignacion Destructurante
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  // rango: 'Avenger'
}

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ( {nombre, edad, clave, rango = 'Capitan'} ) => {

  // const { nombre, edad, clave } = usuario;

  // console.log( `Nombre: ${nombre}, Edad: ${edad}, Clave: ${clave}, Rango: ${rango}` );

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.232,
      lng: -12.234
    }
  }
}

const { nombreClave, anios, latlng:{ lat, lng} } = useContext( persona );

console.log( `Nombre: ${nombreClave}, Años: ${anios}` );
console.log( lat, lng );