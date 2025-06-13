

// Funciones en JS
const saludar = function(nombre) {
  return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola, Mundo`;

// console.log(saludar('Marta'));
// console.log(saludar);
// console.log(saludar2('Marta'));
// console.log(saludar3('Batman'));
// console.log(saludar4());


const getUser = () => ({
  id: 'ABC123',
  username: 'El_Papi243',
});

const user = getUser();
// console.log(user);

// Tarea
const getUsuarioActivo = (nombre) => ({
  uid: 'ABC567',
  username: nombre,
});
const usuarioActivo = getUsuarioActivo('El_Papi243');
console.log(usuarioActivo);