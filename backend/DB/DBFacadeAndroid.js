exports.login = function (_data, _callback) {
    var login = require('./android/user');
    login.login(_data, _callback);
}

exports.getAnimalSummary = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getAnimalSummary(_data, _callback);
}

exports.getAnimalInfo = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getAnimalInfo(_data, _callback);
}

exports.getAnimalSchedule = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getAnimalSchedule(_data, _callback);
}

exports.checkDupID = function (_data, _callback) {
    var user = require("./android/user");
    user.checkDupID(_data, _callback);
};

exports.registration = function(_data,_callback){
    var user = require('./android/user');
    user.registration(_data,_callback);
}