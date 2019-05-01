var poolAdapter = require('../poolAdapter');

exports.registerSchedule = function (_data, _callback) {
    var sql = "INSERT INTO schedule(date,user_idx,animal_idx) VALUES (?,?,?)";

    poolAdapter.execute(sql, [_data.date, _data.user_idx, _data.animal_idx], function (_results) {
        _callback(_results);
    });
}