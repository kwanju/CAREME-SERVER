var express = require('express');
var router = express.Router();


router.post('/registerSchedule', function (_req, _res) {
    var animal = require('../../../../model/android/shelter/animal');
    animal.registerSchedule(_req.body, function () {
        _res.send({ result: 1 });
    });
});

module.exports = router;
