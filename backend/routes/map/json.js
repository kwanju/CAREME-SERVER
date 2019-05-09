var express = require('express');

var router = express.Router();

router.post('/mapTest',function(_req,_res){
    var uc = require('../../model/map/map');

    uc.getSortedShelter(_req.body,function(_result){
        _res.send(_result);
    })
});

module.exports = router;