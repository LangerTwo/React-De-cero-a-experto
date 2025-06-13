

const persona = {
  nombre: "John Doe",
  apellido: "JD",
  edad: 30,
  direccion: {
    ciudad: "New York",
    zip: "10001",
    lat: 40.7128,
    lng: -74.0060
  }
}

// console.table(persona);


const persona2 = {...persona}
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);