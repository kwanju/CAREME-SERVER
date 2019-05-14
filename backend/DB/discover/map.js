var verbose = require('../../verbose');
var poolAdapter = require('../poolAdapter'); // 데이터베이스 풀 어뎁터.

exports.getAllShelterLocation = function (_callback) {
    var sql = "SELECT idx,longitude,latitude FROM shelter";
    poolAdapter.execute(sql, function (_results) {
        _callback(_results);
    });
}