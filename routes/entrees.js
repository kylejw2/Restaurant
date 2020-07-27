const {readEntrees} = require('../data/entrees');

var express = require('express');
var router = express.Router();

// GET entrees
router.get('/', (req, res, next) => {
    readEntrees().then(data => {
        res.send(data);
    });
});

module.exports = router;