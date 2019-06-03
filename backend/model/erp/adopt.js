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
};

exports.getAdoptList = function (_data, _callback) {
    dbFacade.getAdoptList(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.adopt = _results;
        _callback(res);

        var notReadList = []
        for (var i = 0; i < _results.length; i++) {
            var adopt = _results[i];
            if (adopt.read_state == 0)
                notReadList.push(adopt.idx)
        }

        if (notReadList.length != 0)
            dbFacade.updateAdoptNotRead(notReadList, function () { });
    });
};

exports.getPermitAdoptList = function (_data, _callback) {
    dbFacade.getPermitAdoptList(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.adopt = _results;
        _callback(res);
    });
};

exports.getAdopt = function (_data, _callback) {
    dbFacade.getAdopt(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.adopt = _results[0];
        _callback(res);
    });
};

exports.permitAdopt = function (_data, _callback) {
    dbFacade.permitAdopt(_data, function (_results) {
        var res = { result: 1 };
        _callback(res);
    });
};

exports.rejectAdopt = function (_data, _callback) {
    dbFacade.rejectAdopt(_data, function (_results) {
        var res = { result: 1 };
        _callback(res);
    });
};
