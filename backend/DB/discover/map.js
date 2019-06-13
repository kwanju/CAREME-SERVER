var verbose = require('../../verbose');
var poolAdapter = require('../poolAdapter'); // 데이터베이스 풀 어뎁터.

exports.getAllShelterLocation = function (_data, _callback) {
    var sql = "SELECT idx,longitude,latitude FROM shelter ";
    var whereLatitude = "WHERE latitude > ? AND latitude < ? AND "
    var whereLongitude = "longitude > ? AND longitude < ?"



    poolAdapter.execute(sql + whereLatitude + whereLongitude, [_data.start_latitude, _data.end_latitude, _data.start_longitude, _data.end_longitude], function (_results) {
        _callback(_results);
    });
}