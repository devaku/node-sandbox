const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello world');
});

// Public folder
app.use(express.static('public'));

app.set('PORT', PORT);
app.listen(PORT, () => {
    console.log(`Listening at localhost:${PORT}`);
});
