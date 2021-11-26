const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // Routing
    // console.log(req.url);
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    } else if (req.url === '/landing') {
        const readStream = fs.createReadStream('./public/index.html');
        res.writeHead(200);
        readStream.pipe(res);
    } else if (req.url === '/video') {
        // console.log(req.headers);
        // get video stats

        // It would seem mp4 and a few other select types
        // are the ones that Chrome can play
        const videoPath = './public/video.mp4';
        const videoSize = fs.statSync(videoPath).size;

        // Parse Range
        // Example: "bytes=32324-"
        let range = req.headers.range;
        console.log('RANGE: ', req.headers.range);
        if (!range) {
            // Download?
            // create video read stream for this particular chunk
            const videoStream = fs.createReadStream(videoPath);
            // console.log(videoStream);

            const headers = {
                'Content-Type': 'video/mp4',
            };

            // HTTP Status 206 for Partial Content
            res.writeHead(200, headers);
            // Stream the video chunk to the client
            videoStream.pipe(res);

            return;
        }

        const CHUNK_SIZE = 10 ** 6; // 1MB
        const start = Number(range.replace(/\D/g, ''));
        console.log('START', start);
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
        // Create headers
        const contentLength = end - start + 1;
        const headers = {
            'Content-Range': `bytes ${start}-${end}/${videoSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': contentLength,
        };

        // HTTP Status 206 for Partial Content
        res.writeHead(206, headers);

        // create video read stream for this particular chunk
        const videoStream = fs.createReadStream(videoPath, { start, end });

        // Stream the video chunk to the client
        videoStream.pipe(res);
    } else {
        const readStream = fs.createReadStream('./public/halodance.gif');
        res.writeHead(200, { 'Content-type': 'image/gif' });
        readStream.pipe(res);
    }
});

server.listen('3000', () => {
    console.log(`Server is listening at port ${3000}`);
});
