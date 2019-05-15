var dbFacade = require('../../DB/DBFacade');

exports.getDiscoverRequestWaiting = function (_data, _callback) {
    dbFacade.getDiscoverRequestWaiting(_data, function (_results) {
        var res = {}
        res.result = 1;
        res.list = _results;


        var idxs = []

        for (var i = 0; i < _results.length; i++) //Idx 뽑아내기
            if (_results[i].read_state == 0)
                idxs.push(_results[i].idx);
        if (idxs.length != 0)
            dbFacade.updatDiscoverRequestNotRead(idxs, function () {
                _callback(res);
            })
        else
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