var express = require('express');
var router = express.Router();

router.post('/mail', function (_req, _res) {
    var mail = require('../../model/shelter/mail');
    /*
    if(_req.session.user.idx) {
        _req.body.idx = _req.session.user.idx;
    }
    */
    _req.body.idx = 1; //for test
    mail.mailer(_req.body, function (_result) {
        _res.send();
    });
});

module.exports = router;