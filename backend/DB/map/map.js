var verbose = require('../../verbose');
var poolAdapter = require('../poolAdapter'); // 데이터베이스 풀 어뎁터.

exports.getShelterAddress = function (_data, _callback) {
    var sql = "SELECT position, idx FROM shelter";
    poolAdapter.execute(sql, function (_results) {
        _callback(_results);
    });
}