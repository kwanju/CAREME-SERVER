var express = require('express');
var router = express.Router();

router.post('/getShelter', function (_req, _res) {
    var shelter = require('../../../model/erp/shelter');
    if(_req.session.user.idx) {
        _req.body.idx = _req.session.user.idx;
    }
    //_req.body.idx = 1; //for test
    shelter.getShelter(_req.body, function (_result) {
        _res.send(_result);
    });
});

module.exports = router;