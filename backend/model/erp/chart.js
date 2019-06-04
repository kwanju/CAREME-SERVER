var dbFacade = require('../../DB/DBFacade');

exports.getScheduleDate = function (_data, _callback) {
    dbFacade.getScheduleDate(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.date = _results;
        _callback(res);
    })
}

exports.getAdoptDate = function (_data, _callback) {
    dbFacade.getAdoptDate(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.date = _results;
        _callback(res);
    })
}

exports.getDiscoverDate = function (_data, _callback) {
    dbFacade.getDiscoverDate(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.date = _results;
        _callback(res);
    })
}