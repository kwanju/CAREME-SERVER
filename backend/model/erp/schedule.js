var dbFacade = require('../../DB/DBFacade');

exports.getScheduleListNotRead = function (_data, _callback) {
    dbFacade.getScheduleListNotRead(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.list = _results;

        var idxs = []

        for (var i = 0; i < _results.length; i++) //Idx 뽑아내기
            idxs.push(_results[i].idx);
        _callback(res);
        //읽은 목록 읽은 표시.

        /*        dbFacade.updateSheduleListNotRead(idxs, function () {
            _callback(res);
        });
        */
    });
};

exports.permitSchedule = function (_data, _callback) {
    dbFacade.permitSchedule(_data, function () {
        var res = {};
        res.result = 1;
        _callback(res);
    })
}

exports.rejectSchedule = function (_data, _callback) {
    dbFacade.rejectSchedule(_data, function () {
        var res = {};
        res.result = 1;
        _callback(res);
    })
}

