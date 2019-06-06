var express = require('express');
var router = express.Router();

router.post('/getUserScheduleList', function (_req, _res) {
    var schedule = require('../../../model/erp/user');
    schedule.getUserScheduleList(_req.body, function (_result) {    //_req.body -> user idx
        _res.send(_result);
    });
});


module.exports = router;