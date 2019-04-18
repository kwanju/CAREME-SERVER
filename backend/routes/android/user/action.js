var express = require('express');
var router = express.Router();
var androidController = require('../../../controllers/androidController');
/* GET home page. */

router.post('/login',function(_req,_res){
    
    androidController.login(_req.body,function(_result){
        _res.send(_result);
    });
});

module.exports = router;
