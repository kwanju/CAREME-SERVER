var express = require('express');
var router = express.Router();
/* GET home page. */

router.post('/searchShelter',function(_req,_res){
    var androidController = require('../../../controllers/androidController');
    androidController.searchShelterCategory(_req.body,function(_result){
        _res.send(_result);
    });
});;


module.exports = router;
