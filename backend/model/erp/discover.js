var dbFacade = require('../../DB/DBFacade');

exports.getDiscoverRequestWaiting = function (_data, _callback) {
    dbFacade.getDiscoverRequestWaiting(_data, function (_results) {
        var res = {}
        res.result = 1;
        res.list = _results;
        _callback(res);
    });
};

exports.getDiscoverRequestRecord = function (_data, _callback) {
    dbFacade.getDiscoverRequestRecord(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.list = _results;
        _callback(res);
    });
}

exports.permitDiscoverRequest = function (_data, _callback) {
    dbFacade.permitDiscoverRequest(_data, function (_results) {
        var res = {};
        res.result = 1;
        _callback(res);
    });
}

exports.rejectDiscoverRequest = function (_data, _callback) {
    dbFacade.rejectDiscoverRequest(_data, function (_results) {
        var res = {};
        res.result = 1;
        _callback(res);
    });
}