var poolAdaper = require('../poolAdapter');

exports.registerDiscover = function (_data, _callback) {
    var insert = "INSERT INTO discover(" +
        "discover_datetime, discovered_spot, description, species_code,animal_sex," +
        "url_picture, register_datetime, user_idx, longitude, latitude) ";
    var values = "VALUES(?,?,?,?,?," +
        "?,?,?,?,?)";
    var registerDate = require('../../utils/date')();
    poolAdaper.execute(insert + values,
        [_data.discover_datetime, _data.discover_spot, _data.description, _data.species_code, _data.animal_sex,
        _data.url_picture, registerDate, _data.user_idx, _data.longitude, _data.latitude],
        function (_results) {
            _callback(_results.insertId);
        });
};

exports.getDiscoverRecord = function (_data, _callback) {
    var select = "SELECT * "
    var from = "FROM discover "
    var where = "WHERE user_idx =?"

    poolAdaper.execute(select + from + where, [_data.user_idx], function (_results) {
        _callback(_results);
    });

}