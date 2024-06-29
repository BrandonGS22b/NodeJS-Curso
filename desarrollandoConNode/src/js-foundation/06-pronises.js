/*
const getpokemonById =(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/ditto  ${id}`;

    
    return fetch(url)
       .then(response => response.json())
       .then ((pokemon) => pokemon.name);

};
*/
//vamos a trabajar con async 

/*


const getpokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    return pokemon.name;
};

module.exports = getpokemonById;


*/
//practice
/*
const getpokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();


    return pokemon.name;


};

module.exports = getpokemon;
*/


const axios = require('axios');

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    try {
        const response = await axios.get(url);
        return response.data.name;
    } catch (error) {
        console.error('Error fetching Pokemon:', error.message);
        throw error; // Propaga el error para manejarlo más arriba si es necesario
    }
};

module.exports = getPokemonById;

  
  
  
  
