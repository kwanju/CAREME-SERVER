var express = require('express');
var router = express.Router();
/* GET home page. */
var discover = require('../../../model/android/discover/discover');

router.post('/getDiscoverRecord', function (_req, _res) {
    discover.getDiscoverRecord(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getDiscover', function (_req, _res) {
    discover.getDiscover(_req.body, function (_result) {
        _res.send(_result);
    });
});


module.exports = router;
