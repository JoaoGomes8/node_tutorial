// NodeJS módulo File System
const fs = require('fs')

// write file
// fs.writeFile('./dados1.txt', 'joao gomes', () =>{
//     console.log('Ficheiro escrito');
// })

// write file sync
fs.writeFileSync('./dados2.txt', 'ana silva')

// write file - append
// fs.appendFile('./dados1.txt', 'carlos\n', (err) =>{
//     console.log(err);
// })

fs.appendFileSync('./dados1.txt', 'hugo\n')

console.log('última operação');


