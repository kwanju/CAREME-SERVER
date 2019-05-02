var dbFacadeAndroid = require('../../../DB/DBFacadeAndroid');


exports.login = function (_data, _callback) {
    dbFacadeAndroid.login(_data, function (_res) {
        if (_res.length == 0) { // 계정이 없을 시.
            _callback({
                result: 0
            });
        } else { // 계정이 있다면
            _res[0].result = 1;
            var result = _res[0];
            _data.idx = _res[0].idx;

            // 토근 설정.
            dbFacadeAndroid.setToken(_data, function () {
                _callback(result);
            });
        }
    })
}

exports.logout = function(_data,_callback){
    dbFacadeAndroid.deleteToken(_data,function(){
        _callback();
    });
}