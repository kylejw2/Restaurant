const {
    readEntrees,
    createEntree,
    deleteEntree,
    updateEntree
} = require('../data/entrees.js');

var express = require('express');
var router = express.Router();


// router.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

// GET entrees
router.get('/', function(req, res, next) {
    readEntrees().then(data => {
        res.send(data);
    });
});
// GET one entree
router.get('/:id', function(req, res, next) {
    readEntrees(req.params.id).then(data => {
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

// DELETE entree
router.delete('/:id', function(req, res, next) {
    deleteEntree(req.params.id).then(data => {
        res.send(data);
    });
});

// UPDATE entree
router.patch('/:id', function(req, res, next) {
    const body = req.body;
    // Filter the empty properties so they aren't sent
    if (body.name === '') {delete body.name}
    if (body.price === '') {delete body.price}
    if (body.calories === '') {delete body.calories}
    if (body.image === '') {delete body.image}
    updateEntree(req.params.id, body).then(data => {
        res.send(data);
    });
});

module.exports = router;