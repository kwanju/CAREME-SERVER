const NUMPERPAGE = require('../../config').animalList.numberpage; // # of animal per page.

var poolAdapter = require('../poolAdapter'); // get poolAdapter

exports.getAnimalList = function (_data, _callback) {
    var query = "SELECT animal.idx, animal.name, animal.species_code, animal.register_data, animal.state FROM animal";
    var withWhere = ' WHERE animal.shelter_idx=? '
    var withBack = " ORDER BY animal.idx DESC";

    poolAdapter.execute(query + withWhere + withBack, [_data.shelter_idx], function (_results) {
        _callback(_results);
    });
}

exports.getAnimalListPage = function (_data, _callback) {
    var sql = "SELECT COUNT(*) AS count FROM animal ";
    var where = "WHERE shelter_idx=?";
    poolAdapter.execute(sql + where, [_data.shelter_idx], function (_results) {
        if (_results[0].count % NUMPERPAGE == 0)
            _callback(parseInt(_results[0].count / NUMPERPAGE));
        else
            _callback(parseInt(_results[0].count / NUMPERPAGE) + 1)
    });
}

exports.addAnimal = function (_data, _callback) {

    var query = "INSERT INTO " +
        "animal(" +
        "species_code, estimated_birth_age, name, sex, weight, url_picture, register_data, " +
        "discovered_spot, state, shelter_idx, description) "
        + "VALUES (?,?,?,?,?,?,?,?,?,?,?)";

    var date = require('../../utils/date')();

    poolAdapter.execute(query, [
        _data.species_code, _data.estimated_birth_age, _data.name, _data.sex, _data.weight, _data.url_picture, date,
        _data.discovered_spot, _data.state, _data.shelter_idx, _data.description
    ],
        function (_results) {
            _callback();
        });
}

exports.deleteAnimal = function (_data, _callback) {
    var query = "UPDATE animal SET remove=1";
    var withWhere = ' WHERE idx=' + _data.idx


}

exports.getAnimal = function (_data, _callback) {
    var sql = "SELECT * FROM animal ";
    var where = "WHERE idx=?";

    poolAdapter.execute(sql + where, [_data.animal_idx], function (_results) {
        _callback(_results);
    });
}

exports.updateAnimal = function (_data,_idx, _callback) {
    var sql = "UPDATE animal SET ? ";
    var where = "WHERE idx=?"

    poolAdapter.execute(sql + where, [_data,_idx], function (_results) {
        _callback();
    });

}
