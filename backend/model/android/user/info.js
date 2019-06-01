var dbFacadeAndroid = require('../../../DB/DBFacadeAndroid');


exports.getInfo = function (_data, _callback, _testcallback) {
    dbFacadeAndroid.getInfo(_data, function (_result) {
        if (typeof _testcallback == 'function')
            _testcallback(_result)
        var res = {
            result: 1,
            info: _result
        }
        _callback(res);

    });
}
