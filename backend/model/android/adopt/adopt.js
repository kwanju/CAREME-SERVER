var dbFacade = require('../../../DB/DBFacadeAndroid');

exports.getAdoptList = function (_data, _callback, _testcallback) {
    dbFacade.getAdoptList(_data, function (_adoptList) {
        if (typeof _testcallback == 'function')
            _testcallback(_adoptList);

        var res = {
            result: 1,
            list: _adoptList
        }
        _callback(res);
    });
}