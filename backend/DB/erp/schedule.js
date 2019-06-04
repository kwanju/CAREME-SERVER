var poolAdapter = require('../poolAdapter');

exports.getScheduleListPermitted = function (_data, _callback) {
    var sql = "SELECT schd.idx, schd.date, schd.apply_datetime, " +
        "schd.animal_idx, a.name AS animalName, a.species_code, " +
        "u.nickname AS userNickName,u.phone_number AS userPhoneNumber, u.email AS userEmail "
    var join = "FROM schedule AS schd INNER JOIN animal AS a INNER JOIN shelter AS slt INNER JOIN user AS u ";
    var on = "ON schd.animal_idx = a.idx AND slt.idx = a.shelter_idx AND u.idx=schd.user_idx ";
    var where = "WHERE slt.idx = ? AND permit=1";

    poolAdapter.execute(sql + join + on + where, [_data.shelter_idx], function (_results) {
        _callback(_results);
    });
};

exports.getScheduleListWaiting = function (_data, _callback) {
    var sql = "SELECT schd.idx, schd.date, schd.apply_datetime, schd.read_state, " +
        "schd.animal_idx, a.name AS animalName, a.species_code, " +
        "u.nickname AS userNickName,u.phone_number AS userPhoneNumber, u.email AS userEmail "
    var join = "FROM schedule AS schd INNER JOIN animal AS a INNER JOIN shelter AS slt INNER JOIN user AS u ";
    var on = "ON schd.animal_idx = a.idx AND slt.idx = a.shelter_idx AND u.idx=schd.user_idx ";
    var where = "WHERE slt.idx = ? AND permit=0";

    poolAdapter.execute(sql + join + on + where, [_data.shelter_idx], function (_results) {
        _callback(_results);
    });
}

//새로운 글을 읽었을 때 read_state 1로 만들어줌.
exports.updateScheduleListNotRead = function (_data, _callback) {
    var sql = "UPDATE schedule SET read_state=1 ";
    var where = "WHERE idx IN (?)";

    poolAdapter.execute(sql + where, [_data], function (_results) {
        _callback();
    });
}

exports.permitSchedule = function (_data, _callback) {
    var sql = "UPDATE schedule SET permit=1 ";
    var where = "WHERE idx=?";

    poolAdapter.execute(sql + where, [_data.idx], function (_results) {
        _callback();
    });
};

exports.rejectSchedule = function (_data, _callback) {
    var sql = "UPDATE schedule SET permit=-1 "
    var where = "WHERE idx=?"

    poolAdapter.execute(sql + where, [_data.idx], function (_results) {
        _callback();
    });
}

exports.getPushInfoAboutSchedule = function (_data, _callback) {
    var select = "SELECT u.token, a.name AS animalName, slt.name AS shelterName, s.date "
        + "FROM schedule AS s INNER JOIN user AS u INNER JOIN animal AS a INNER JOIN shelter AS slt "
    var on = "ON s.user_idx=u.idx AND a.idx = s.animal_idx AND a.shelter_idx = slt.idx ";
    var where = "WHERE s.idx=?";
    poolAdapter.execute(select + on + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}

exports.checkScheduleReadState = function (_data, _callback) {
    var sql = "SELECT * FROM schedule AS s INNER JOIN animal AS a ";
    var on = "ON s.animal_idx=a.idx ";
    var where = "WHERE s.read_state=0 AND a.shelter_idx=?";
    poolAdapter.execute(sql + on + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}

exports.getVolunteerInCalendar = function (_data, _callback) {
    var select = "SELECT sch.idx, a.name AS animalName, a.species_code, u.nickname, sch.date "
    var from = "FROM schedule AS sch INNER JOIN animal AS a INNER JOIN user AS u INNER JOIN shelter AS she ";
    var on = "ON sch.animal_idx = a.idx AND sch.user_idx = u.idx AND a.shelter_idx =she.idx "
    var where = "WHERE she.idx = ? AND sch.permit=1";

    poolAdapter.execute(select + from + on + where, [_data.shelter_idx], function (_results) {
        _callback(_results);
    });
}

exports.getAnimalInCalendar = function (_data, _callback) {
    var select = "SELECT sch.idx, a.name AS animalName, a.species_code, u.nickname, sch.date "
    var from = "FROM schedule AS sch INNER JOIN animal AS a INNER JOIN user AS u INNER JOIN shelter AS she ";
    var on = "ON sch.animal_idx = a.idx AND sch.user_idx = u.idx AND a.shelter_idx =she.idx "
    var where = "WHERE she.idx = ? AND sch.permit=1 AND a.idx = ?";

    poolAdapter.execute(select + from + on + where, [_data.shelter_idx, _data.animal_idx], function (_results) {
        _callback(_results);
    });
}

exports.getVolunteerToday = function (_data, _callback) {
    var date = require('../../utils/date')();
    var select = "SELECT COUNT(*) AS count ";
    var from = "FROM schedule INNER JOIN animal INNER JOIN shelter ";
    var on = "ON schedule.animal_idx = animal.idx AND animal.shelter_idx = shelter.idx ";
    var where = "WHERE date(date) = date('"+date+"') AND shelter.idx = ?";

    poolAdapter.execute(select+from+on+where, [_data.shelter_idx],function (_result) {
        _callback(_result);
    })
}

exports.getVolunteerName = function (_data, _callback) {
    var date = require('../../utils/date')();
    var select = "SELECT user.nickname AS userName, animal.name AS animalName, animal.idx AS animalIdx ";
    var from = "FROM schedule INNER JOIN animal INNER JOIN shelter INNER JOIN user ";
    var on = "ON schedule.animal_idx = animal.idx AND animal.shelter_idx = shelter.idx AND schedule.user_idx = user.idx ";
    var where = "WHERE date(date) = date('"+date+"') AND shelter.idx = ?";

    poolAdapter.execute(select+from+on+where, [_data.shelter_idx],function (_result) {
        _callback(_result);
    })
}

exports.getAlarmNumb = function (_data, _callback) {
    var date = require('../../utils/date')();
    var select = "SELECT COUNT(*) AS count " +
        "FROM schedule INNER JOIN animal INNER JOIN shelter " +
        "ON schedule.animal_idx = animal.idx AND animal.shelter_idx = shelter.idx " +
        "WHERE date(date) = date('"+date+"') AND shelter.idx = ? " +
        "UNION ALL ";
    var select2 = "SELECT COUNT(*) AS count " + "FROM discover_request INNER JOIN shelter " +
        "ON discover_request.shelter_idx = shelter.idx " +
        "WHERE date(register_datetime) = date('"+date+"') AND shelter.idx = ? " +
        "UNION ALL ";
    var select3 = "SELECT COUNT(*) AS count " + "FROM adopt INNER JOIN animal INNER JOIN shelter " +
        "ON adopt.animal_idx = animal.idx AND animal.shelter_idx = shelter.idx " +
        "WHERE date(datetime) = date('"+date+"') AND shelter.idx = ?";

    poolAdapter.execute(select+select2+select3, [_data.shelter_idx, _data.shelter_idx, _data.shelter_idx],function (_result) {
        _callback(_result);
    })
}