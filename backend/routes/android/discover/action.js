var express = require('express');
var router = express.Router();

var animalImageUpload = require('../../../model/erp/animalImageUpload');



router.post('/registerDiscover', animalImageUpload.uploadImage(), function (_req, _res) {
    console.log(_req.body);
    var discover = require('../../../model/android/discover/discover');
    discover.registerDiscover(_req,_req.body, function (_result) {
        _res.send(_result);
    })
});

module.exports = router;