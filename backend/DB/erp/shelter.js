const NUMPERPAGE = require('../../config').animalList.numberpage; // # of animal per page.

var poolAdapter = require('../poolAdapter'); // get poolAdapter

exports.getShelter = function (_data, _callback) {
    var sql = "SELECT * FROM shelter ";
    var where = "WHERE idx=?";
    poolAdapter.execute(sql + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}

exports.updateShelter = function (_data, _idx, _callback) {
    var sql = "UPDATE shelter SET ? ";
    var where = "WHERE idx=?";
    //console.log("db _data: "+ JSON.stringify(_data));
    poolAdapter.execute(sql + where, [_data,_idx], function (_results) {
        _callback(_results);
    });
}
