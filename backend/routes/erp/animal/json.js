var express = require('express');
var router = express.Router();

var insertIdxIntoBody = require('../../../utils/erp/insertIdxIntoBody');

router.post('/getAnimalList', insertIdxIntoBody, function (_req, _res) {
    var animal = require('../../../model/erp/animal');
    animal.getAnimalList(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getAnimalListPage', insertIdxIntoBody, function (_req, _res) {
    var animal = require('../../../model/erp/animal');
    animal.getAnimalListPage(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getAnimal', function (_req, _res) {
    var animal = require('../../../model/erp/animal');
    animal.getAnimal(_req.body, function (_result) {
        _res.send(_result);
    });
});
module.exports = router;