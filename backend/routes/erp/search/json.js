var express = require('express');
var router = express.Router();

router.post('/searchAnimalByName', function (_req, _res) {
    var animal = require('../../../model/erp/search');
    //if(_req.session.user.idx) {
    //    _req.body.idx = _req.session.user.idx;
    //}
    _req.body.idx = 1; //for test
    animal.searchAnimalByName(_req.body, function (_result) {
        _res.send(_result);
    });
});

module.exports = router;