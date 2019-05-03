
exports.login = function (_id, _pw, _callback) {
  var login = require('./shelter/login');
  login.login(_id, _pw, _callback);
}

exports.checkDupId = function (_id, _callback) {
  var registration = require('./shelter/registration');
  registration.checkDupId(_id, _callback);
}

exports.registration = function (_data, _callback) {
  var r = require('./shelter/registration');
  r.registration(_data, _callback);
}

exports.writeBoard = function (_data, _callback) {
  var b = require('./bbs/bbs');
  b.writeBoard(_data, _callback);
}

exports.deleteBoard = function (_data, _callback) {
  var b = require('./bbs/bbs');
  b.deleteBoard(_data, _callback);
}

exports.getBbsList = function (_data, _callback) {
  var b = require('./bbs/bbs');
  b.getBbsList(_data, _callback);
}

exports.getPages = function (_callback) {
  var b = require('./bbs/bbs');
  b.getPages(_callback);
}

exports.getBb = function (_data, _callback) {
  var b = require('./bbs/bbs');
  b.getBb(_data, _callback);
}

exports.getUserSerialFromBb = function (_data, _callback) {
  var b = require('./bbs/bbs');
  b.getUserSerial(_data, _callback);
}

exports.getComments = function (_data, _callback) {
  var b = require('./bbs/bbs');
  b.getComments(_data, _callback);
}

exports.writeComment = function (_data, _callback) {
  var b = require('./bbs/bbs');
  b.writeComment(_data, _callback);
}

exports.searchShelterCategory = function (_data, _callback) {
  var shelter = require('./android/shelter');
  shelter.getShelterByCategory(_data, _callback);
}


//유기견 리스트, 등록, 삭제
exports.addAnimal = function (_data, _callback) {
  var animal = require('./erp/animal');
  animal.addAnimal(_data, _callback);
}

exports.deleteAnimal = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.deleteAnimal(_data, _callback);
}

exports.getAnimalList = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.getAnimalList(_data, _callback);
}
