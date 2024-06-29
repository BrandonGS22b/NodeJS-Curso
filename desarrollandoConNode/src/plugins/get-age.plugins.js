//const getAgePlugin = require('get-Age'); // Requiere el módulo 'get-Age'

const getAge = (birthdate) => {
  
        if(!birthdate) return new Error('Birthdate is required'); // Lanza una excepción si la fecha de nacimiento es faltante.
    

        return new Date().getFullYear() - new Date(birthdate).getFullYear(); //
   // return getAgePlugin(birthdate); // Usa el módulo 'get-Age' para calcular la edad
};

module.exports = {
    getAge
};
