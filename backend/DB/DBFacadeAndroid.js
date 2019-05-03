exports.login = function (_data, _callback) {
    var login = require('./android/user');
    login.login(_data, _callback);
}

exports.getAnimalSummary = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getAnimalSummary(_data, _callback);
}

exports.getAnimalInfo = function (_data, _callback) {
    var animal = require('./android/animal');
    animal.getAnimalInfo(_data, _callback);
}

exports.getAnimalSchedule = function (_data, _callback) {
    var animal = require('./android/animal');
    animal.getAnimalSchedule(_data, _callback);
}

exports.checkDupID = function (_data, _callback) {
    var user = require("./android/user");
    user.checkDupID(_data, _callback);
};

exports.registration = function (_data, _callback) {
    var user = require('./android/user');
    user.registration(_data, _callback);
}

exports.getVolunteerShelter = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getVolunteerShelter(_data, _callback);
}

exports.getShelter = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getShelter(_data, _callback);
}

exports.registerSchedule = function (_data, _callback) {
    var animal = require('./android/animal');
    animal.registerSchedule(_data, _callback);
}

exports.setToken = function (_data, _callback) {
    var user = require('./android/user');
    user.setToken(_data, _callback);
}

exports.deleteToken = function (_data, _callback) {
    var user = require('./android/user');
    user.deleteToken(_data, _callback);
}

exports.getUserSchedule = function (_data, _callback) {
    var schedule = require('./android/schedule');
    schedule.getUserSchedule(_data, _callback);
}