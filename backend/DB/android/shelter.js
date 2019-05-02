var poolAdapter = require('../poolAdapter'); // 데이터베이스 풀 어뎁터.

// Shelter를 지역 카테고리로 디비에 검색하는 부분.
exports.getShelterByCategory = function (_data, _callback) {
    var sql = "SELECT idx,name,position,phone_number FROM shelter ";
    var where = "WHERE position LIKE '%" + _data.big + "%' AND position LIKE '%" + _data.small + "%'";
    poolAdapter.execute(sql + where, function (_results) {
        _callback(_results);
    });
}
// 보호소에서 보호중인 animal 간략정보들을 가져오는 부분
exports.getAnimalSummary = function (_data, _callback) {
    var sql = "SELECT idx,species_code,name,url_picture FROM animal ";
    var where = "WHERE shelter_idx = ? AND state = ?";

    poolAdapter.execute(sql + where, [_data.shelter_idx, _data.state], function (_results) {
        _callback(_results);
    });
};

exports.getVolunteerShelter = function (_data, _callback) {
    var sql = "SELECT " +
        "shelter.volunteer_start_time, shelter.volunteer_end_time, shelter.volunteer_description " +
        "FROM shelter INNER JOIN animal ";
    var on = "ON shelter.idx = animal.shelter_idx ";
    var where = "WHERE animal.idx = ?";

    poolAdapter.execute(sql + on + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}

exports.getShelter = function (_data, _callback) {
    var sql = "SELECT * FROM shelter ";
    var where = "WHERE idx=?";
    poolAdapter.execute(sql + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}