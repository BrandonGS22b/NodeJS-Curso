const fs = require("fs"); // Modulo de sistema de archivos para leer el contenido del archivo

const content = fs.readFileSync("../README.md", "utf8"); // Lee el contenido del archivo README.md como texto UTF-8

const wordCount = content.split(" ").length; // Cuenta el número total de palabras en el contenido

//const reactwordCount = word.filter((word) => word.toLowerCase().includes('react')).length // Contabiliza las ocurrencias de la palabra
//"react" en el contenido (comentario desactivado)

const reactwordCount = content.match(/react/gi ?? []).length; // Cuenta el número de ocurrencias de la palabra "react" en el contenido

console.log("palabras:", wordCount); // Imprime el número total de palabras

// Tarea: Contar las ocurrencias de la palabra "react"
console.log("palabras Reac:", reactwordCount); // Imprime el número de ocurrencias de la palabra "react"
