//import template from './js-foundation/01-template';

//const emailTemplate = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring'); //cuando hacemos este requiere estamos ejecutando ya el destructuring
// Importar la función getUserById desde el archivo de callbacks


/*clase 28 del curoso 
const { getUserById } = require('./js-foundation/03-callbacks');

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


getUserById(id,(err, user)=>{
    if(err){
        console.error('Error al buscar al usuario:',err);
    } else{
        console.log('Este es el usuario:',user);
    }
 
});
*/

//clase 29

require ('./js-foundation/05-factory.js')