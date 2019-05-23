var express = require('express');
var router = express.Router();
/* GET home page. */

router.post('/getDiscoverFind', function (_req, _res) {
    var discoverFind = require('../../../model/android/discoverFind/discoverFind');
    discoverFind.getDiscoverFind(_req.body, function (_result) {
        _res.send(_result);
    });
});


module.exports = router;
