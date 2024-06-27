const getAgePlugin = require('get-Age'); // Requiere el módulo 'get-Age'

const getAge = (birthdate) => {
    if (!birthdate) {
        if(!birthdate) return new Error('Birthdate is required'); // Lanza una excepción si la fecha de nacimiento es faltante.
    }
    return getAgePlugin(birthdate); // Usa el módulo 'get-Age' para calcular la edad
};

module.exports = {
    getAge
};
