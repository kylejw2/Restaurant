const {
    readEntrees,
    createEntree
} = require('../data/entrees.js');

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

// CREATE entree
router.post('/', function(req, res, next) {
    const body = req.body;
    createEntree(body).then(data => {
        res.send(data);
    });
  });

module.exports = router;