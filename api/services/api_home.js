const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.render('pages/landing');
    res.json({
        status: 'success',
    });
});

module.exports = router;
