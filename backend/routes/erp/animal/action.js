var express = require('express');
var router = express.Router();

var animalImageUpload = require('../../../model/erp/animalImageUpload');

router.post('/addAnimal', animalImageUpload.uploadImage(), function (_req, _res) {
    var animal = require('../../../model/erp/animal');
    animal.addAnimal(_req, _req.body, function (_result) {
        _res.send(_result);
    });
});


module.exports = router;