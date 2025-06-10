

const nombre = 'Mauro';
const apellido = 'Mancilla';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre} 
${apellido}
${ 1 + 1 }
`;

console.log(`Hola, mi nombre es ${nombreCompleto}.`);

function getSaludo(nombre) {
  return `Hola Mundo`;
}

console.log( `Este es un texto ${getSaludo()} `)