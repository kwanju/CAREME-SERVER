var express = require('express');
var router = express.Router();
var insertIdxIntoBody = require('../../../utils/erp/insertIdxIntoBody');

router.post('/getAdoptList', insertIdxIntoBody, function (_req, _res) { //body = shelter idx
    var adopt = require('../../../model/erp/adopt');
    adopt.getAdoptList(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getPermitAdoptList', insertIdxIntoBody, function (_req, _res) { //body = shelter idx
    var adopt = require('../../../model/erp/adopt');
    adopt.getPermitAdoptList(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getAdopt', function (_req, _res) { // body = adopt idx
    var adopt = require('../../../model/erp/adopt');
    adopt.getAdopt(_req.body, function (_result) {
        _res.send(_result);
    });
})

module.exports = router;