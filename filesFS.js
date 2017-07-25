var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt', 'utf8'); // will read entire contents of file before continuing executing code.  this is blocking behavior.
console.log(readMe);

console.log('\n continuing program \n');

if (const doesExist = ifExistSync('writeMe.txt') {
        fs.unlink('writeMe.txt');

    }

    fs.writeFileSync('writeMe.txt', readMe + '\n  more stuff  \n' + readMe);
    var writeMe = fs.readFileSync('writeMe.txt', 'utf8');

    console.log(writeMe);