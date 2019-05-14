var express = require('express');
var router = express.Router();

router.post('/getDiscoverRequestWaiting', function (_req, _res) {
    var discover = require('../../../model/erp/discover');
    discover.getDiscoverRequestWaiting(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getDiscoverRequestRecord', function (_req, _res) {
    var discover = require('../../../model/erp/discover');
    discover.getDiscoverRequestRecord(_req.body, function (_result) {
        _res.send(_result);
    });
});
module.exports = router;