
var dbfacade = require('../DB/DBFacade');



exports.checkDupId = function (_id, _callback) {
  dbfacade.checkDupId(_id, _callback)
}

exports.registration = function (_data, _callback) {
  dbfacade.registration(_data, _callback);
}

exports.addAnimal = function (_data, _callback) {
  animal.addAnimal(_data, _callback);
}

exports.deleteAnimal = function (_data, _callback) {
  animal.deleteAnimal(_data, _callback);
}

exports.getAnimalList = function (_data, _callback) {
  animal.getAnimalList(_data, _callback);
}