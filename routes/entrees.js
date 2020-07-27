const {readEntrees} = require('../data/entrees.js');

var express = require('express');
var router = express.Router();


router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
// GET entrees
router.get('/', function(req, res, next) {
    readEntrees().then(data => {
        res.send(data);
    });
});

module.exports = router;