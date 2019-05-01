var express = require('express');
var router = express.Router();

router.post('/checkDupId', function (_req, _res) {
    var uc = require('../../controllers/shelterController');

    uc.checkDupId(_req.body.id, function (_result) {
        if (_result)//id 중복
            _res.send("false")
        else
            _res.send("true");
    });
});

module.exports = router;