var verbose = require('../../verbose');

var poolAdapter = require('../poolAdapter'); // 데이터베이스 풀 어뎁터.

exports.checkReadState = function (_data, _callback) {
    var sql = "SELECT * FROM schedule AS s INNER JOIN animal AS a ";
    var on = "ON s.animal_idx=a.idx ";
    var where = "WHERE s.read_state=0 AND a.shelter_idx=?";
    poolAdapter.execute(sql+on+where, [_data.idx], function (_results) {
        _callback(_results);
    });
}

exports.getCoords = function (_data, _callback) {

}