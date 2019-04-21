

exports.login = function(_data,_callback){
    var loginModel = require('../model/android/user/login');
    loginModel.login(_data,_callback);    
}

exports.searchShelterCategory = function(_data,_callback){
    var searchModel = require("../model/android/shelter/search");
    searchModel.searchShelterCategory(_data,_callback);
}

exports.getAnimalSummary = function(_data,_callback){
    var animal = require('../model/android/shelter/animal');
    animal.getAnimalSummary(_data,_callback);
}