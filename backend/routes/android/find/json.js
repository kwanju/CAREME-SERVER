var express = require('express');
var router = express.Router();
/* GET home page. */

router.post('/getFind', function (_req, _res) {
    var find = require('../../../model/android/find/find');
    find.getFind(_req.body, function (_result) {
        _res.send(_result);
    });
})

module.exports = router;
