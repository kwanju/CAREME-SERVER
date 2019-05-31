var express = require('express');
var router = express.Router();

router.post('/checkDupID', function (_req, _res) {
    var registration = require('../../../model/android/user/registration');
    registration.checkDupID(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getUserSchedule', function (_req, _res) {
    var schedule = require('../../../model/android/shelter/schedule');
    schedule.getUserSchedule(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getFavoriteInfoList', function (_req, _res) {
    console.log(_req.body);
    var favorite = require('../../../model/android/user/favorite');
    favorite.getFavoriteInfoList(_req.body, function (_result) {
        _res.send(_result)
    });
});

module.exports = router;
