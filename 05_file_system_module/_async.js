// NodeJS módulo File System
const fs = require('fs')

// reading files / LER FICHEIROS DE FORMA ASSINCRONA
if (fs.existsSync('./dados.csv')) {
    fs.readFile('./dados.csv', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data.toString());
        }
    })
} else {
    console.log('Ficheiro não encontrado');
}


console.log('ultima operação');