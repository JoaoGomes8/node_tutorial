const fs = require('fs')

const escrita = fs.WriteStream('./output.txt')

escrita.write('o meu texto.\n');