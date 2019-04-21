exports.login = function(_data,_callback){
    var login = require('./android/user');
    login.login(_data,_callback);
}

exports.getAnimalSummary = function(_data,_callback){
    var shelter = require('./android/shelter');
    shelter.getAnimalSummary(_data,_callback);
}