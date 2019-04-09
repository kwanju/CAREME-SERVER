
var dbfacade = require('../DB/DBFacade');


exports.login = function(_id,_pw,_callback){
  dbfacade.login(_id,_pw,_callback);
};



