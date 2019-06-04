var dbFacade = require('../../DB/DBFacade');

exports.getScheduleDate = function (_data, _callback) {
    dbFacade.getScheduleDate(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.date = _results;
        _callback(res);
    })
}