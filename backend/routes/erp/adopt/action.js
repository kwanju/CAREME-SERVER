var express = require('express');
var router = express.Router();

router.post('/permitAdopt', function (_req, _res) { // body = adopt idx
    var adopt = require('../../../model/erp/adopt');
    adopt.permitAdopt(_req.body, function (_result) {
        _res.send(_result);
    });
})

router.post('/rejectAdopt', function (_req, _res) { // body = adopt idx
    var adopt = require('../../../model/erp/adopt');
    adopt.getAdopt(_req.body, function (_result) {
        _res.send(_result);
    });
})


module.exports = router;