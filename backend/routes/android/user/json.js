var express = require('express');
var router = express.Router();

router.post('/checkDupID', function (_req, _res) {
    var registration = require('../../../model/android/user/registration');
    registration.checkDupID(_req.body, function (_result) {
        _res.send(_result);
    });
});
module.exports = router;
