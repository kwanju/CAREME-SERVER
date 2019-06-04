var poolAdapter = require('../poolAdapter');

exports.getScheduleDate = function (_data, _callback) {
    var sql = "SELECT DATE_FORMAT(date,'%Y-%m') m, COUNT(*) AS c FROM schedule GROUP BY m ORDER BY m DESC";

    poolAdapter.execute(sql, [_data.shelter_idx], function (_results) { //shelter_idx
        _callback(_results);
    });
};

exports.getAdoptDate = function (_data, _callback) {
    var sql = "SELECT DATE_FORMAT(datetime,'%Y-%m') m, COUNT(*) AS c FROM adopt GROUP BY m ORDER BY m DESC";

    poolAdapter.execute(sql, [_data.shelter_idx], function (_results) { //shelter_idx
        _callback(_results);
    });
};

exports.getDiscoverDate = function (_data, _callback) {
    var sql = "SELECT DATE_FORMAT(register_datetime,'%Y-%m') m, COUNT(*) AS c FROM discover_request GROUP BY m ORDER BY m DESC";

    poolAdapter.execute(sql, [_data.shelter_idx], function (_results) { //shelter_idx
        _callback(_results);
    });
};