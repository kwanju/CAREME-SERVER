var express = require('express');
var router = express.Router();

var insertIdxIntoBody = require('../../../utils/erp/insertIdxIntoBody');

router.post('/getScheduleListPermitted', insertIdxIntoBody, function (_req, _res) {
    var schedule = require('../../../model/erp/schedule');
    schedule.getScheduleListPermitted(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getScheduleListWaiting', insertIdxIntoBody, function (_req, _res) {
    var schedule = require('../../../model/erp/schedule');
    schedule.getScheduleListWaiting(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getVolunteerInCalendar', insertIdxIntoBody, function (_req, _res) {
    var schedule = require('../../../model/erp/schedule');
    schedule.getVolunteerInCalendar(_req.body, function (_result) {
        _res.send(_result);
    });
});

module.exports = router;