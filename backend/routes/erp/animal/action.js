var express = require('express');
var router = express.Router();

var animalImageUpload = require('../../../model/erp/animalImageUpload');

router.post('/addAnimal', animalImageUpload.uploadImage(), function (_req, _res) {
    var animal = require('../../../model/erp/animal');
    animal.addAnimal(_req, _req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/android', animalImageUpload.uploadImage(), function (_req, _res) {
    console.log(_req.body);
    console.log(_req.file)
    _res.send("test");
});


module.exports = router;