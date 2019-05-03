var dbFacade = require('../../../DB/DBFacadeAndroid');

exports.getUserSchedule = function (_data, _callback) {
    dbFacade.getUserSchedule(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.list = _results;
        _callback(res);
    });
}