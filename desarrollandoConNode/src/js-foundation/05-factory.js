// Importar funciones desde '../plugins/index'
//const { getAge, getUUID } = require('../plugins/index');

// Importar función getUUID desde '../plugins/get-id.plugin'
const { getUUID } = require('../plugins/get-id.plugin');

// Importar función getAge desde '../plugins/get-age.plugin'
const { getAge } = require('../plugins/get-age.plugin');

// Definir función de tipo flecha buildPerson
const buildPerson = ({ name, birthdate }) => {
    return {
        id: getUUID(),         // Genera un ID único usando getUUID()
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate), // Calcula la edad usando getAge() y la fecha de nacimiento
    };
};

// Objeto con datos para crear una persona
const objeto = { name: 'brandon', birthdate: '2002-06-11' };

// Crear una persona utilizando la función buildPerson
const brandon = buildPerson(objeto);

console.log(brandon); // Imprime el objeto 'brandon' que representa a la persona creada

// Exportar la función buildPerson
module.exports = {
    buildPerson
};

// Ejemplo utilizando una clase (factory function)
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona1 = new Persona('Juan', 30);
persona1.saludar(); // Imprime: Hola, soy Juan y tengo 30 años.
