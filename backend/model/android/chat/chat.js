var dbFacadeErp = require('../../../DB/DBFacade');

exports.getChat = function (_data, _callback, _testcallback) {
    dbFacadeErp.getChat(_data, function (_results) {
        if (typeof _testcallback == 'function')
            _testcallback(_results);

        var res = {
            result: 1,
            list: _results
        }
        _callback(res);
    });
}