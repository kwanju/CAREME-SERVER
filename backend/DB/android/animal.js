var poolAdapter = require('../poolAdapter');

exports.registerSchedule = function (_data, _callback) {
    var sql = "INSERT INTO schedule(date,user_idx,animal_idx,apply_datetime) VALUES (?,?,?,?)";
    var curDateTime = require('../../utils/date')();
    poolAdapter.execute(sql, [_data.date, _data.user_idx, _data.animal_idx,curDateTime], function (_results) {
        _callback(_results);
    });
};

// 보호동물 정보 가져오는 부분
exports.getAnimalInfo = function (_data, _callback) {
    var sql = "SELECT animal.*,shelter.name AS shelter_name FROM animal INNER JOIN shelter ";
    var on = "ON animal.shelter_idx = shelter.idx "
    var where = "WHERE animal.idx=?";

    poolAdapter.execute(sql + on + where, [_data.animal_idx], function (_result) {
        _callback(_result);
    });
};

exports.getAnimalSchedule = function (_data, _callback) {
    var sql = "SELECT * FROM schedule ";
    var where = "WHERE animal_idx = ? and date>= ? AND date< ? AND permit=1";

    poolAdapter.execute(sql + where, [_data.animal_idx, _data.start_date, _data.end_date], function (_result) {
        _callback(_result);
    });

};