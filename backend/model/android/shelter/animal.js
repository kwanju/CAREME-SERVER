var dbFacade = require('../../../DB/DBFacadeAndroid');

exports.getAnimalSummary = function(_data,_callback){
    dbFacade.getAnimalSummary(_data,function(_result){
        var res = {};
        res.result = 1;
        res.list = _result;
        _callback(res);
    })    
}

exports.getAnimalInfo = function(_data,_callback){
    dbFacade.getAnimalInfo(_data,function(_result){
        var res = {};
        res.result = 1;
        res.animalInfo = _result[0];
        _callback(res);
    });
};