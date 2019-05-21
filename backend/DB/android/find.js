var poolAdapter = require('../poolAdapter');

exports.registerFind = function (_data, _callback) {
    var insert = "INSERT INTO find SET ?"
    /* var dataName = "(user_idx, lost_datetime, lost_spot, description, species_code, " +
         "animal_sex, url_picture, register_datetime, longitude, latitude) "
     var values = "VALEUS(?,?,?,?,?" +
         "?,?,?,?,?)";
     */
    poolAdapter.execute(insert, _data, function (_results) {
        _callback(_results.insertId);
    });

}