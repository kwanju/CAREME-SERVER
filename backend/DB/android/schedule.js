var poolAdapter = require('../poolAdapter');

exports.getUserSchedule = function (_data, _callback) {
    var whereSchedule = "WHERE user_idx=?";
    var sql = "SELECT sch.date, sch.permit, ani.name AS animalName, slt.name AS shelterName, ani.url_picture, ani.idx AS animal_idx FROM " +
        "(SELECT * FROM schedule " + whereSchedule + ") AS sch " +
        "INNER JOIN animal AS ani INNER JOIN shelter AS slt ";
    var on = "ON sch.animal_idx=ani.idx AND slt.idx=ani.shelter_idx ";
    var etc = "ORDER BY sch.date desc";
    poolAdapter.execute(sql + on + etc, [_data.idx], function (_results) {
        _callback(_results);
    });
};
