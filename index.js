// Load environment variables for debugging
if (!process.env.NODE_ENV) {
    require('dotenv').config();
    console.clear();
    console.log('Loaded Environment Variables');
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV.toUpperCase() === 'DEVELOPMENT') {
    const morgan = require('morgan');
    app.use(morgan('short'));
}

// Set routes
require('./api')(app);

// Public folder
const path = require('path');
let staticFolder = path.join(__dirname, '/public');
app.use(express.static(staticFolder));

// Set view engine as EJS
app.set('view engine', 'ejs');

app.set('PORT', PORT);
app.listen(PORT, () => {
    console.log(`Listening at localhost:${PORT}`);
});
