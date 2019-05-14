var verbose = require('../../verbose');

var pool = require('../pool').getPool(); //get pool.

var poolAdapter = require('../poolAdapter'); // 데이터베이스 풀 어뎁터.

const PATH = "/DB/user/registration.js";

/*
    작성자 : 박현선
    아이디 중복되었는지 디비에서 가져오는 모듈

    중복되면 true / 중복되지 않으면 false 반환
*/
exports.checkDupId = function (_id, _callback) {
    var query = "SELECT id FROM shelter WHERE id=?"
    pool.getConnection(function (_err, _conn) {
        if (_err)
            throw _err;
        _conn.query(query, [_id], function (_err, _results) {
            if (_err)
                throw _err;

            if (_results.length > 0) // if id is dup
                _callback(true);
            else// 
                _callback(false);
        });
    });
}

exports.registration = function (_data, _callback) {
    var query = "INSERT INTO shelter(id,pw,name,position,position2,phone_number) VALUES (?,?,?,?,?,?)";
    poolAdapter.execute(query,
        [_data.id, _data.pw, _data.name, _data.position1, _data.position2, _data.phone_number]
        , function () {
            _callback();
        });
}

exports.registerLocation = function (_data, _callback) {
    var query = "UPDATE shelter SET longitude=?, latitude=? ";
    var where = "WHERE id=?";
    poolAdapter.execute(query + where,
        [_data.longitude, _data.latitude, _data.id],
        function () {
            _callback();
        });
}