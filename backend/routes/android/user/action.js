var express = require('express');
var router = express.Router();
var androidController = require('../../../controllers/androidController');
/* GET home page. */

router.post('/login',function(_req,_res){
    
    androidController.login(_req.body,function(_result){
        _res.send(_result);
    });
});

router.post('/registration',function(_req,_res){
    var registration = require('../../../model/android/user/registration');
    registration.registration(_req.body,function(_result){
        _res.send(_result);
    })
});

module.exports = router;
