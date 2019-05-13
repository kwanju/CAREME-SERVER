var dbFacade = require('../../DB/DBFacade');

exports.checkReadState = function (_data, _callback) {
    res = {};
    res.result = 1;

    checkScheduleReadState(_data, res, function () {
        _callback(res);
    });
}

var checkScheduleReadState = function (_data, _res, _callback) {
    dbFacade.checkScheduleReadState(_data, function (_results) {
        _res.schedule = _results;
        if (typeof _callback == 'function')
            _callback();
    });
}