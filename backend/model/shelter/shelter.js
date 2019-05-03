var dbFacade = require('../../DB/DBFacade');

exports.checkReadState = function (_data, _callback) {
    dbFacade.checkReadState(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.schedule = _results;
        _callback(res);
    });
}