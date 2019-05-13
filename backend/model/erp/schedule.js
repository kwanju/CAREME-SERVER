var dbFacade = require('../../DB/DBFacade');

exports.getScheduleListPermitted = function (_data, _callback) {
    dbFacade.getScheduleListPermitted(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.list = _results;
        _callback(res);
    });
};

exports.getScheduleListWaiting = function (_data, _callback) {
    dbFacade.getScheduleListWaiting(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.list = _results;

        var idxs = []

        for (var i = 0; i < _results.length; i++) //Idx 뽑아내기
            if (_results[i].read_state == 0)
                idxs.push(_results[i].idx);

        //읽은 목록 읽은 표시.

        if (idxs.length != 0) {
            dbFacade.updateSheduleListNotRead(idxs, function () {
                _callback(res);
            });
        } else {
            _callback(res);
        }

    });
};

exports.permitSchedule = function (_data, _callback) {
    dbFacade.permitSchedule(_data, function () {
        var res = {};
        res.result = 1;
        _callback(res);

        //푸시 메시지 보내기
        dbFacade.getPushInfoAboutSchedule(_data, function (_results) {
            var token = _results[0].token;

            var body = _results[0].animalName + "(" + _results[0].shelterName + ") " + _results[0].date + " 허가되었습니다.";

            var fcm = require('../../utils/android/fcm');
            fcm.send(token, body);
            console.log(token);
            console.log(body);
        });
    })
}

exports.rejectSchedule = function (_data, _callback) {
    dbFacade.rejectSchedule(_data, function () {
        var res = {};
        res.result = 1;
        _callback(res);
    })
}

