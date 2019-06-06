var dbFacade = require('../../DB/DBFacade');

exports.getUserScheduleList = function (_data, _callback) {
    dbFacade.getUserScheduleList(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.schedule = _results;
        _callback(res);
    });
}