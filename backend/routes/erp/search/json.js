var express = require('express');
var router = express.Router();

router.post('/searchAnimal', function (_req, _res) {
    var animal = require('../../../model/erp/search');
    //_req.body -> shelter idx, type: 검색할 속성, text: 검색할 문자열
    animal.searchAnimalByName(_req.body, function (_result) { //byName 이지만 name외에도 검색 가능(이름수정을 아직 안했음)
        _res.send(_result);
    });
});

router.post('/searchShelterByName', function (_req, _res) {
    var shelter = require('../../../model/erp/search');

    shelter.searchShelterByName(_req.body, function (_result) {
        _res.send(_result);
    });
});

module.exports = router;