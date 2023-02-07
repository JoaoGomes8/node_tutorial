// NodeJS módulo File System
const fs = require('fs')

// create folder
if (!fs.existsSync('./pasta1')) {
    fs.mkdir('./pasta1', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Pasta criada com sucesso');
        }
    })
} else {
    console.log('A pasta já existe');
}


// remove folder
if (fs.existsSync('./pasta1')) {
    fs.rm('./pasta1', { recursive: true }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Pasta removida com sucesso');
        }
    })
} else {
    console.log('Pasta inexistente');
}






console.log('terminado');

