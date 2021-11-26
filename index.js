const fs = require('fs');

/**
 * Streams are used primarily for LARGE files. Like GIGABYTE big
 * fs.Readfile will crash if the files are way too big
 * Which is why streams are used for larger file sizes
 */

// One way of doing this
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

// PIPES!

// Compression library
const zlib = require('zlib');

// gzip basically compresses stuff down
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

let createGzip = (filename, output) => {
    fs.createReadStream(filename).pipe(gzip).pipe(fs.createWriteStream(output));
};

let readGzip = (filename, output) => {
    fs.createReadStream(filename)
        .pipe(gunzip)
        .pipe(fs.createWriteStream(output));
};

// createGzip('example.txt', 'example.txt.gz');

readGzip('example.txt.gz', 'uncompressed.txt');
