var poolAdapter = require('../poolAdapter'); // get poolAdapter

exports.searchAnimalByName = function (_data, _callback) {
    var sql = "SELECT * FROM animal ";
    var where = "WHERE shelter_idx=? "; // idx -> 검색 항목
    var typeCondition = "AND "+ _data.type +" "; // name, species_code, etc
    var like = "LIKE '%" + _data.text + "%'";// 문자열
    poolAdapter.execute(sql+where+typeCondition+like, [_data.idx], function (_results) {
        _callback(_results);
    });
}

exports.searchShelterByName = function (_data, _callback) {
    var sql = "SELECT * FROM shelter ";
    var where = "WHERE name "; //idx -> 검색 항목
    var like = "LIKE '%" + _data.문자열 + "%'";// 문자열
    poolAdapter.execute(sql+where+like, function (_results) {
        _callback(_results);
    });
}