var express = require('express');
var router = express.Router();

var animalImageUpload = require('../../../model/erp/animalImageUpload');
var find = require('../../../model/android/find/find');

router.post('/registerFind', animalImageUpload.uploadImage(), function (_req, _res) {
    find.registerFind(_req, _req.body, function (_result) {
        _res.send(_result);
    })
})


module.exports = router;