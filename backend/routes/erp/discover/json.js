var express = require('express');
var router = express.Router();
var insertIdxIntoBody = require('../../../utils/erp/insertIdxIntoBody');

router.post('/getDiscoverRequestWaiting', insertIdxIntoBody, function (_req, _res) {
    var discover = require('../../../model/erp/discover');
    discover.getDiscoverRequestWaiting(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getDiscoverRequestRecord', insertIdxIntoBody, function (_req, _res) {
    var discover = require('../../../model/erp/discover');
    discover.getDiscoverRequestRecord(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getDiscoverInfo', function (_req, _res) {
    var discover = require('../../../model/erp/discover');
    discover.getDiscoverInfo(_req.body, function (_result) {
        _res.send(_result);
    });
});
module.exports = router;