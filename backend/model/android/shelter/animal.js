var dbFacade = require('../../../DB/DBFacadeAndroid');

exports.getAnimalSummary = function(_data,_callback){
    dbFacade.getAnimalSummary(_data,function(_result){
        var res = {};
        res.result = 1;
        res.list = _result;
        _callback(res);
    })    
}