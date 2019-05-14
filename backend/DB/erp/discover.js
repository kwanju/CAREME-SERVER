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
    var update = "UPDATE discover_request SET permit=1 ";
    var where = "WHERE idx=?";

    poolAdapter.execute(update + where, [_data.idx], function (_results) {
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