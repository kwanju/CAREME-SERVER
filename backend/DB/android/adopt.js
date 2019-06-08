var poolAdapter = require('../poolAdapter');

exports.getAdoptList = function (_data, _callback) {
    var select = "SELECT ad.datetime, ani.name AS animalName, ani.species_code, she.name AS shelterName, ad.permit, ani.url_picture "
    var from = "FROM adopt AS ad INNER JOIN animal AS ani INNER JOIN shelter AS she ";
    var on = "ON ad.animal_idx = ani.idx AND ani.shelter_idx = she.idx ";
    var where = "WHERE ad.user_idx = ?";

    poolAdapter.execute(select + from + on + where, [_data.user_idx], function (_results) {
        _callback(_results);
    });
}