exports.login = function(_data,_callback){
    var login = require('./android/user');
    login.login(_data,_callback);
}