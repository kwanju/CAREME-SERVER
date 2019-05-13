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