const { Transform } = require('stream');

const upperCaseTr = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

require('fs').createReadStream('./somefile.txt').pipe(upperCaseTr).pipe(process.stdout)