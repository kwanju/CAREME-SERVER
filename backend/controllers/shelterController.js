
var dbfacade = require('../DB/DBFacade');



exports.checkDupId = function(_id,_callback){
  dbfacade.checkDupId(_id,_callback) 
}

exports.registration = function(_data,_callback){
  dbfacade.registration(_data,_callback);
}

 