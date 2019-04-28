var express = require('express');
var router = express.Router();
/* GET home page. */

/**
 * 
 * 필요한 파라메터 : shelter_idx state
 */
router.post('/getAnimalSummary',function(_req,_res){
    var androidController = require('../../../../controllers/androidController');
    androidController.getAnimalSummary(_req.body,function(_result){
        _res.send(_result);
    });
});;

router.post('/getAnimalInfo',function(_req,_res){
    var animalModel = require('../../../../model/android/shelter/animal');
    animalModel.getAnimalInfo(_req.body,function(_result){
        _res.send(_result);
    })
});


module.exports = router;
