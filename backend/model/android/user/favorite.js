var dbFacadeAndroid = require('../../../DB/DBFacadeAndroid');


exports.getFavoriteInfoList = function (_data, _callback, _testcallback) {
    dbFacadeAndroid.getFavoriteInfoList(_data, function (_results) {
        var res = {}
        res.result = 1;
        res.list = _results;
        _callback(res);
        if (typeof _testcallback == 'function')
            _testcallback(_results);
    });
}
