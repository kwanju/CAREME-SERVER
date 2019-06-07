var poolAdapter = require('../poolAdapter');

exports.getUserScheduleList = function (_data, _callback) {
    var sql = "SELECT schd.*, a.name AS animalName ";
    var join = "FROM schedule AS schd INNER JOIN user AS u INNER JOIN animal AS a ";
    var on = "ON u.idx = schd.user_idx AND a.idx = schd.animal_idx ";
    var where = "WHERE u.idx = ? AND schd.permit=1";

    poolAdapter.execute(sql + join + on + where, [_data.idx], function (_results) { //user id 받아옴
        _callback(_results);
    });
};