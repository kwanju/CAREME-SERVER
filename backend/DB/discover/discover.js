var verbose = require('../../verbose');
var poolAdapter = require('../poolAdapter'); // 데이터베이스 풀 어뎁터.

exports.createDiscoverRequest = function (_data, _callback) {
    var sql = "INSERT INTO discover_request(discover_idx, shelter_idx) ";
    var values = "VALUES (?,?)";
    poolAdapter.execute(sql+values,[_data.discover.idx, _data.shelter.idx] , function (_results) {
        _callback(_results);
    });
}//discover_request에 insert

exports.checkDiscoverRequestReadState = function (_data, _callback) {
    var sql = "SELECT * FROM discover_request AS d ";
    var where = "WHERE d.read_state=0";
    poolAdapter.execute(sql+where, function (_results) {
        _callback(_results);
    });
}//read_state가 0인 discover_request 객체를 보낸다