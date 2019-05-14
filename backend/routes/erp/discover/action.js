var express = require('express');
var router = express.Router();

router.post('/permitDiscoverRequest', function (_req, _res) {
    console.log("IN")
    var discover = require('../../../model/erp/discover');
    discover.permitDiscoverRequest(_req.body, function (_result) {
        _res.send(_result);
    })

});

router.post('/rejectDiscoverRequest', function (_req, _res) {
    var discover = require('../../../model/erp/discover');
    discover.rejectDiscoverRequest(_req.body, function (_result) {
        _res.send(_result);
    })
});

module.exports = router;