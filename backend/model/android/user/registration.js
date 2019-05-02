var dbFacade = require("../../../DB/DBFacadeAndroid");

exports.checkDupID = function (_data, _callback) {
    dbFacade.checkDupID(_data, function (_results) {
        res = {};
        if (_results.length == 0)
            res.result = 1;
        else
            res.result = 0;
        _callback(res);
    });
};

exports.registration = function(_data,_callback){
    dbFacade.registration(_data,function(){
        var login = require('./login');
        login.login({
            id:_data.id,
            pw:_data.pw,
            token:_data.token
        },function(_result){
            _callback(_result);
        })
    });
}