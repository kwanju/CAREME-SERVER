var express = require('express');
var router = express.Router();

router.post('/checkReadState',function(_req,_res){
    //console.log("111231");
    if(_req.session.user.idx) {
        _req.body.idx = _req.session.user.idx;
        //console.log(_req.body.idx);
    }
    var uc = require('../../../model/shelter/shelter');
    uc.checkReadState(_req.body,function(_result){
        _res.send(_result);
    });
});

module.exports = router;