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
        sendPush(_data, 1)
    })
}

exports.rejectSchedule = function (_data, _callback) {
    dbFacade.rejectSchedule(_data, function () {
        var res = {};
        res.result = 1;
        _callback(res);

        //푸시 메시지 보내기
        sendPush(_data, -1)
    })
}

exports.getVolunteerInCalendar = function (_data, _callback, _testcallback) {
    dbFacade.getVolunteerInCalendar(_data, function (_results) {
        if (typeof _testcallback == 'function')
            _testcallback(_results);
        var res = {}
        res.result = 1;
        res.list = _results;
        _callback(res);
    });
}

exports.getAnimalInCalendar = function (_data, _callback, _testcallback) {
    dbFacade.getAnimalInCalendar(_data, function (_results) {
        if (typeof _testcallback == 'function')
            _testcallback(_results);
        var res = {}
        res.result = 1;
        res.list = _results;
        _callback(res);
    });
}
exports.getVolunteerToday = function (_data, _callback) {
    dbFacade.getVolunteerToday(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.volunteer = _results[0];
        _callback(res);
    })
}

exports.getVolunteerName = function (_data, _callback) {
    dbFacade.getVolunteerName(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.volunteer = _results;
        _callback(res);
    })
}

exports.getAlarmNumb = function (_data, _callback) {
    dbFacade.getAlarmNumb(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.count = _results;
        _callback(res);
    })
}

var sendPush = function (_data, _permit) {
    var config = require('../../config').fcm;
    var permit = _permit == 1 ? "허가" : "거부";
    dbFacade.getPushInfoAboutSchedule(_data, function (_results) {
        var token = _results[0].token;
        var date = formatDate(_results[0].date)
        var body = _results[0].animalName + "(" + _results[0].shelterName + ") " + date + " " + permit + " 되었습니다.";

        var fcm = require('../../utils/android/fcm');
        fcm.send(token, body,config.mode.SCHEDULE,{
            message : body
        });
    });
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
