var express = require('express');
var router = express.Router();

var insertIdxIntoBody = require('../../../utils/erp/insertIdxIntoBody');

router.post('/getScheduleDate', insertIdxIntoBody, function (_req, _res) {
    var date = require('../../../model/erp/chart');
    date.getScheduleDate(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getAdoptDate', insertIdxIntoBody, function (_req, _res) {
    var date = require('../../../model/erp/chart');
    date.getAdoptDate(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getDiscoverDate', insertIdxIntoBody, function (_req, _res) {
    var date = require('../../../model/erp/chart');
    date.getDiscoverDate(_req.body, function (_result) {
        _res.send(_result);
    });
});

module.exports = router;