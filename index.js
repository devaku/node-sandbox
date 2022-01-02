// Load environment variables for debugging
if (!process.env.NODE_ENV) {
    require('dotenv').config();
    console.clear();
    console.log('Loaded Environment Variables');
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Set the ROOT DIRECTORY
global.ROOT_DIRECTORY = __dirname;

if (process.env.NODE_ENV.toUpperCase() === 'DEVELOPMENT') {
    const morgan = require('morgan');
    app.use(morgan('short'));

    // Live Reload just refreshes the front end
    const livereload = require('livereload');
    const server = livereload.createServer(
        {
            extraExts: ['ejs'],
        },
        () => {
            console.log('Live Reload is ready!');
        }
    );
    const path = require('path');

    let folders = [
        path.join(ROOT_DIRECTORY, '/public'),
        path.join(ROOT_DIRECTORY, '/views/pages'),
    ];
    server.watch(folders);
    app.use(require('connect-livereload')());
}

// Set routes
require('./api')(app);

// Public folder
const path = require('path');
let staticFolder = path.join(ROOT_DIRECTORY, '/public');
app.use(express.static(staticFolder));

// Set view engine as EJS
app.set('view engine', 'ejs');

app.set('PORT', PORT);
app.listen(PORT, () => {
    console.log(`Listening at localhost:${PORT}`);
});
