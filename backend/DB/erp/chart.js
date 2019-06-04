var poolAdapter = require('../poolAdapter');

exports.getScheduleDate = function (_data, _callback) {
    var sql = "SELECT DATE_FORMAT(date,'%Y-%m') m, COUNT(*) AS c FROM schedule GROUP BY m ORDER BY m DESC";

    poolAdapter.execute(sql, [_data.shelter_idx], function (_results) { //shelter_idx
        _callback(_results);
    });
};