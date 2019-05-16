var express = require('express');
var router = express.Router();
/* GET home page. */

router.post('/getDiscoverRecord', function (_req, _res) {
    var discover = require('../../../model/android/discover/discover');
    discover.getDiscoverRecord(_req.body, function (_result) {
        _res.send(_result);
    });
});


module.exports = router;
