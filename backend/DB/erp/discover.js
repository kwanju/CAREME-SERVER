var poolAdapter = require('../poolAdapter');


exports.getDiscoverRequestWaiting = function (_data, _callback) {
    var select = "SELECT dr.idx, d.register_datetime AS requestDateTime, d.species_code, d.discover_datetime, d.discovered_spot, dr.read_state ";
    var join = "FROM discover_request AS dr INNER JOIN discover AS d ";
    var on = "ON dr.discover_idx = d.idx ";
    var where = "WHERE dr.shelter_idx = ? AND dr.permit=0";

    poolAdapter.execute(select + join + on + where, [_data.shelter_idx], function (_results) {
        _callback(_results);
    });
};

exports.updatDiscoverRequestNotRead = function (_data, _callback) {
    var sql = "UPDATE discover_request SET read_state=1 ";
    var where = "WHERE idx IN (?)";

    poolAdapter.execute(sql + where, [_data], function (_results) {
        _callback();
    });
}

exports.getDiscoverRequestRecord = function (_data, _callback) {
    var select = "SELECT dr.idx, d.register_datetime AS requestDateTime, d.species_code, d.discover_datetime, d.discovered_spot, dr.permit ";
    var join = "FROM discover_request AS dr INNER JOIN discover AS d ";
    var on = "ON dr.discover_idx = d.idx ";
    var where = "WHERE dr.shelter_idx = ? AND dr.permit<>0";

    poolAdapter.execute(select + join + on + where, [_data.shelter_idx], function (_results) {
        _callback(_results);
    });
}

exports.permitDiscoverRequest = function (_data, _callback) {
    var cur_date = require('../../utils/date')();
    var update = "UPDATE discover_request SET permit=1 ";
    var where = "WHERE idx=?";

    var sql = "INSERT INTO animal (species_code, sex, url_picture, discovered_spot, " +
        "discovered_spot_latitude, discovered_spot_longitude, shelter_idx, discover_idx, name, register_data, state, description) " +
        "SELECT d.species_code, d.animal_sex, d.url_picture, d.discovered_spot, d.latitude, " +
        "d.longitude, dr.shelter_idx, d.idx, '없음', '" + cur_date + "', 5, description " +
        "FROM discover d " + "INNER JOIN discover_request dr " + "WHERE dr.idx=? AND d.idx = dr.discover_idx";

    //INSERT INTO animal (species_code, sex, url_picture, discovered_spot, discovered_spot_latitude,
    // discovered_spot_longitude, shelter_idx, discover_idx, name, register_data) SELECT d.species_code, d.animal_sex,
    // d.url_picture, d.discovered_spot, d.latitude, d.longitude, dr.shelter_idx, d.idx, '없음', '2019-06-04'
    // FROM discover d INNER JOIN discover_request dr WHERE d.idx=dr.discover_idx

    var select = "SELECT discover_idx FROM discover_request WHERE idx = ?";

    poolAdapter.execute(update + where, [_data.idx], function (_results) { //discover_request의 idx
        poolAdapter.execute(sql, [_data.idx], function () {
            poolAdapter.execute(select, [_data.idx], function (_results) {
                _callback(_results[0].discover_idx)
            })
        })
    });
};

exports.updateDiscoverShelter = function (_data, _callback) {
    var update = "UPDATE discover AS d INNER JOIN discover_request AS dr ";
    var on = "ON d.idx = dr.discover_idx ";
    var set = "SET d.matching_shelter_idx = dr.shelter_idx ";
    var where = "WHERE dr.idx=?";

    poolAdapter.execute(update + on + set + where, [_data.idx], function () {
        _callback();
    });
};

exports.rejectDiscoverRequest = function (_data, _callback) {
    var update = "UPDATE discover_request SET permit=-1 ";
    var where = "WHERE idx=?";

    poolAdapter.execute(update + where, [_data.idx], function (_results) {
        _callback();
    });
};

exports.getDiscoverFromDiscoverRequest = function (_data, _callback) {
    var select = "SELECT d.idx, d.longitude, d.latitude ";
    var from = "FROM discover AS d INNER JOIN discover_request AS dr ";
    var on = "ON d.idx = dr.discover_idx ";
    var where = "WHERE dr.idx = ?";

    poolAdapter.execute(select + from + on + where, [_data.idx], function (_results) {
        _callback(_results);
    });

}

exports.checkDiscoverRequestReadState = function (_data, _callback) {
    var sql = "SELECT * FROM discover_request ";
    var where = "WHERE shelter_idx = ? AND read_state = 0"
    poolAdapter.execute(sql + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}

exports.getAppPushInfoWhenPermitDiscoverRequest = function (_data, _callback) {
    var select = "SELECT u.token ";
    var join = "FROM user AS u INNER JOIN discover AS d INNER JOIN discover_request AS dr ";
    var on = "ON u.idx = d.user_idx AND d.idx = dr.discover_idx ";
    var where = "WHERE dr.idx = ?"

    poolAdapter.execute(select + join + on + where, [_data.idx], function (_results) {
        _callback(_results[0].token);
    });
}

exports.getDiscoverInfo = function (_data, _callback) {
    var select = "SELECT d.* FROM discover AS d INNER JOIN discover_request AS dr ";
    var on = "ON d.idx = dr.discover_idx ";
    var where = "WHERE dr.idx = ?";
    poolAdapter.execute(select + on + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}