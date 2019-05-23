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
    var select = "SELECT d.*, s.name AS shelterName "
    var from = "FROM discover AS d LEFT JOIN shelter AS s "
    var on = "ON d.matching_shelter_idx = s.idx "
    var where = "WHERE d.user_idx =?"

    poolAdaper.execute(select + from + on + where, [_data.user_idx], function (_results) {
        _callback(_results);
    });

}

exports.getDiscoverInBulletinBoard = function (_data, _callback) {
    var select = "SELECT idx,species_code, animal_sex, url_picture,discovered_spot, discover_datetime FROM discover ORDER BY discover_datetime DESC";

    poolAdaper.execute(select, function (_results) {
        _callback(_results);
    });
}

exports.getDiscover = function (_data, _callback) {
    var select = "SELECT * FROM discover ";
    var where = "WHERE idx=?";

    poolAdaper.execute(select + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}