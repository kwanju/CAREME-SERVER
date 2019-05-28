var express = require('express');
var router = express.Router();


router.post('/addAnimal', function (_req, _res) {
    var animal = require('../../../model/erp/animal');
    animal.addAnimal(_req.body, function (_result) {
        _res.send(_result);
    });
});


module.exports = router;