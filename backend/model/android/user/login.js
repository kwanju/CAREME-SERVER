var dbFacadeAndroid = require('../../../DB/DBFacadeAndroid');


exports.login = function(_data,_callback){
    dbFacadeAndroid.login(_data,function(_res){
        if(_res.length == 0){ // 계정이 없을 시.
            _callback({
                result:0
            });
        }else{ // 계정이 있다면
            _res[0].result = 1;
            _callback(_res[0]);
        }
    })
}