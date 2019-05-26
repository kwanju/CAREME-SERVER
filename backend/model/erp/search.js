var dbFacade = require('../../DB/DBFacade');

exports.searchAnimalByName = function (_data, _callback) {
    dbFacade.searchAnimalByName(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.animal = _results;
        _callback(res);
    });
}
exports.searchShelterByName = function (_data, _callback) {
    dbFacade.searchShelterByName(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.shelter = _results[0];
        _callback(res);
    });
}