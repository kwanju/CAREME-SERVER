var dbFacade = require('../../DB/DBFacade');

exports.addAdopt = function (_data, _callback) {
    dbFacade.addAdopt(_data, function (_results) {
        var res = { result: 1 };
        _callback(res);
    });
};

exports.userLogin = function (_data, _callback) {
    dbFacade.userLogin(_data, function (_results) {
        var res = {}
        if (_results.length == 1) {
            res.result = 1
            res.user = _results[0]
        } else {
            res.result = 0;
        }
        _callback(res);
    });
}