var poolAdapter = require('../poolAdapter'); // get poolAdapter

exports.searchAnimalByName = function (_data, _callback) {
    var sql = "SELECT * FROM animal ";
    var where = "WHERE shelter_idx=? "; // idx -> 검색할 shelter idx
    var typeCondition = "AND "+ _data.type +" "; // _data.type = name, species_code, etc
    var like = "LIKE '%" + _data.text + "%'";// 문자열
    poolAdapter.execute(sql+where+typeCondition+like, [_data.idx], function (_results) {
        _callback(_results);
    });
}

exports.searchShelterByName = function (_data, _callback) {
    var sql = "SELECT shelter.idx, shelter.name FROM shelter ";
    var where = "WHERE name "; // shelter 이름 검색
    var like = "LIKE '%" + _data.text + "%'";// 입력 문자열
    poolAdapter.execute(sql+where+like, function (_results) {
        _callback(_results);
    });
}