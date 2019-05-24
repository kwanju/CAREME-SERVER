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
    var select = "SELECT * FROM find ";
    var where = "WHERE idx=?";

    poolAdapter.execute(select + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}