var express = require('express');
var router = express.Router();

router.post('/permitSchedule', function (_req, _res) {
    var schedule = require('../../../model/erp/schedule');
    schedule.permitSchedule(_req.body, function (_result) {
        _res.send(_result);
    })
});

router.post('/rejectSchedule', function (_req, _res) {
    var schedule = require('../../../model/erp/schedule');
    schedule.rejectSchedule(_req.body, function (_result) {
        _res.send(_result);
    })
});


module.exports = router;