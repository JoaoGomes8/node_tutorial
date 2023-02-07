// NodeJS módulo File System
const fs = require('fs')

// delete files - unlink
if (fs.existsSync('dados1.txt')) {
    fs.unlink('./dados1.txt', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Ficheiro eliminado com sucesso');
        }
    })
} else {
    console.log('Ficheiro não existe');
}

// delete files - is possible with rm
// if (fs.existsSync('dados1.txt')) {
//     fs.rm('./dados1.txt', (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Ficheiro eliminado com sucesso');
//         }
//     })
// } else {
//     console.log('Ficheiro não existe');
// }
