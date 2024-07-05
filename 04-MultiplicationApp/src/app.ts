//en este ejercicio estare haciendo la logica para imprimir la tabla del 5 y la imprimiremos con el fs en un txt

import fs from  'fs';
let outputMessage = '';
const base = 5;
const headerMessage = `
    =======================
        Tabla del ${base}
    =======================


`;

for (let i = 1; i <= 10; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

const impresion = headerMessage + outputMessage;

console.log(impresion);

fs.writeFile('tabla_del_5.txt', impresion, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});	

/*
fs.writeFile('tabla_del_6.txt'm impresion , (err) =>{



});


*/