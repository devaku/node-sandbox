const fs = require('fs');
const readStream = fs.createReadStream('example.txt', 'UTF-8');
const writeStream = fs.createWriteStream('output.txt');

/**
 * Streams are used primarily for LARGE files. Like GIGABYTE big
 * fs.Readfile will crash if the files are way too big
 * Which is why streams are used for larger file sizes
 */
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});
