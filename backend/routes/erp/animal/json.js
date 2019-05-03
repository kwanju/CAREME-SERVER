var express = require('express');
var router = express.Router();

router.post('/getAnimalList', function (_req, _res) {
    var animal = require('../../../model/erp/animal');
    animal.getAnimalList(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getAnimalListPage', function (_req, _res) {
    var animal = require('../../../model/erp/animal');
    animal.getAnimalListPage(_req.body, function (_result) {
        _res.send(_result);
    });
});
module.exports = router;