// Importar la función getUserById desde el archivo de callbacks
/*
import { getUserById } from './js-foundation/03-callbacks.js';

// Definir el ID que vamos a buscar
const id = 2;

// Llamar a la función getUserById con el ID y un callback
getUserById(id, function (err, user) {
    if (err) {
        // Si hay un error, lanzar una excepción con el mensaje de error
        throw new Error(err);
    }
    // Si no hay error, mostrar el usuario en la consola
    console.log('Este es el usuario:', user);
});


getUserById(id, (err, user) => {
    if (err) {
        console.error('Error al buscar al usuario:', err);
    } else {
        console.log('Este es el usuario:', user);
    }
});
*/

// Clase 32 factory function factory callbacks
/*
import { getUUID } from './plugins/get-id.plugin.js';
import { getAge } from './plugins/get-age.plugin.js';

// Importar la función buildMakePerson
import { buildMakePerson } from './js-foundation/05-factory.js';

// Usar la función buildMakePerson con getUUID y getAge2
const makePerson = buildMakePerson(getUUID, getAge);

const objeto = { name: 'brandon', birthdate: '2002-06-11' };
const brandon = makePerson(objeto);

console.log(brandon);
*/

// Clase 33 promises
/*
import getpokemonById from './js-foundation/06-pronises';

getpokemonById(4)
  .then((pokemons) => console.log({ pokemons }))
  .catch((err) => console.log('Por favor intente de nuevo'))
  .finally(() => console.log('finalmente'));
*/

// Clase 37
const { getAge, getUUID } = require("./plugins");

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory')
//const getPokemonById = require('./js-foundation/06-pronises');
const { buildLogger } = require("./plugins/index");

// Crear el logger
const logger = buildLogger("app.js");

// Ejemplo de uso del logger
logger.log("info", "Hola mundo");
console.log("La aplicación está corriendo...");
