var dbFacade = require('../../DB/DBFacade');

exports.addAdopt = function (_data, _callback) {
    dbFacade.addAdopt(_data, function (_results) {
        var res = { result: 1 };
        _callback(res);
    });
};