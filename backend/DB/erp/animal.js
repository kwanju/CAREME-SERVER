const NUMPERPAGE = 10; // # of animal per page.

var poolAdapter = require('../poolAdapter'); // get poolAdapter

exports.getAnimalList = function (_data, _callback) {
    var offset = (_data.page - 1) * NUMPERPAGE;

    var query = "SELECT animal.idx, animal.url_picture, animal.species_code, animal.register_data, FROM animal";
    var withWhere = ' WHERE animal.remove=0 '
    var withBack = " ORDER BY animal.idx DESC LIMIT " + NUMPERPAGE + " OFFSET " + offset;


}

exports.addAnimal = function (_data, _callback) {

    var query = "INSERT INTO " +
        "animal(" +
        "species_code, estimated_birth_age, name, sex, weight, url_picture, register_data, "+
        "discovered_spot, state, shelter_idx, description) "
        + "VALUES (?,?,?,?,?,?,?,?,?,?,?)";

    poolAdapter.execute(query, [
        _data.species_code, _data.estimated_birth_age, _data.name, _data.sex, _data.weight, _data.url_picture, _data.register_date,
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
