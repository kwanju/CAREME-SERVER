var dbFacade = require('../../DB/DBFacade');

exports.checkReadState = function (_data, _callback) {
    res = {};
    res.result = 1;

    checkScheduleReadState(_data, res, function () {
        checkDiscoverReadState(_data, res, function () {
            checkAdoptReadState(_data, res, function () {
                _callback(res);
            });
        })
    });
}

var checkScheduleReadState = function (_data, _res, _callback) {
    dbFacade.checkScheduleReadState(_data, function (_results) {
        _res.schedule = _results;
        if (typeof _callback == 'function')
            _callback();
    });
}

var checkDiscoverReadState = function (_data, _res, _callback) {
    dbFacade.checkDiscoverRequestReadState(_data, function (_results) {
        _res.discoverRequest = _results;
        if (typeof _callback == 'function')
            _callback();
    });
}

var checkAdoptReadState = function (_data, _res, _callback) {
    dbFacade.checkAdoptReadState(_data, function (_results) {
        _res.adopt = _results;
        if (typeof _callback == 'function')
            _callback();
    });
}