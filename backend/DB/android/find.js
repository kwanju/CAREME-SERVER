var poolAdapter = require('../poolAdapter');

exports.registerFind = function (_data, _callback) {
    var data = _data;
    var insert = "INSERT INTO find SET ?"
    /* var dataName = "(user_idx, lost_datetime, lost_spot, description, species_code, " +
         "animal_sex, url_picture, register_datetime, longitude, latitude) "
     var values = "VALEUS(?,?,?,?,?" +
         "?,?,?,?,?)";
     */

    var registerDate = require('../../utils/date')();
    data.register_datetime = registerDate;
    poolAdapter.execute(insert, _data, function (_results) {
        _callback(_results.insertId);
    });

}

exports.getFindInBulletinBoard = function (_data, _callback) {
    var select = "SELECT idx, species_code, animal_sex, url_picture,lost_spot, lost_datetime FROM find ORDER BY lost_datetime DESC";

    poolAdapter.execute(select, function (_results) {
        _callback(_results);
    });
}

exports.getFind = function (_data, _callback) {
    var select = "SELECT f.*, u.nickname, u.phone_number FROM find AS f INNER JOIN user AS u ";
    var on = "ON f.user_idx = u.idx "
    var where = "WHERE f.idx=?";

    poolAdapter.execute(select + on + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}

exports.matchingFind = function (_data, _callback) {
    var select = "SELECT u.token FROM find AS f INNER JOIN user AS u "
    var on = "ON u.idx = f.user_idx "
    var whereLatitude = "WHERE f.latitude > ? AND f.latitude < ? AND "
    var whereLongitude = "f.longitude > ? AND f.longitude < ? AND "
    var whereDate = "f.lost_datetime > ? AND f.lost_datetime < ? AND "
    var whereSC = "f.species_code = ? AND "
    var whereSex = "f.animal_sex = ?"

    poolAdapter.execute(select + on + whereLatitude + whereLongitude + whereDate + whereSC + whereSex,
        [_data.start_latitude, _data.end_latitude, _data.start_longitude, _data.end_longitude,
        _data.start_date, _data.end_date, _data.species_code, _data.sex],
        function (_results) {
            _callback(_results);
        });
}