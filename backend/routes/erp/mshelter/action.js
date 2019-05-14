var express = require('express');
var router = express.Router();

var animalImageUpload = require('../../../model/erp/animalImageUpload');

router.post('/updateShelter', animalImageUpload.uploadImage(), function (_req, _res) {
    var shelter = require('../../../model/erp/shelter');
    //console.log("req.body: "+JSON.stringify(_req.body));
    //_req.body.idx = 1; //for test
    if(_req.session.user.idx) {
        _req.body.idx = _req.session.user.idx;
    }
    shelter.updateShelter(_req, _req.body, function (_result) {
        _res.send(_result);
    });
});


module.exports = router;