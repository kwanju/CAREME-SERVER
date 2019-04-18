

exports.login = function(_data,_callback){
    var loginModel = require('../model/android/user/login');
    loginModel.login(_data,_callback);    
}