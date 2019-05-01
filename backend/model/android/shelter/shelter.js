var dbFacade = require('../../../DB/DBFacadeAndroid');

exports.getShelter = function (_data, _callback) {
    dbFacade.getShelter(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.shelter = _results[0];
        _callback(res);
    });
}