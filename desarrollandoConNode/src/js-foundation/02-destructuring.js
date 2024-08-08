/**
 * Imprime las variables de entorno en la consola.
 */
console.log(process.env);

// Extraigo variables de entorno específicas utilizando sintaxis de desestructuración
/**
 * Esta línea extrae tres variables de entorno: shell, HOMEBREW_PREFIX y npm_lifecycle,
 * desde el objeto process.env. Los valores extraídos se almacenan en constantes separadas.
 */
const { shell, HOMEBREW_PREFIX, npm_lifecycle } = process.env;

/**
 * Defino un arreglo de nombres de superhéroes.
 */
const characters = ["flash", "superman", "batman"];

/**
 * Utilizo sintaxis de desestructuración para extraer elementos individuales del arreglo characters
 * y almacenarlos en constantes separadas.
 */
const [flash, superman, batman] = characters;

console.log(batman);
