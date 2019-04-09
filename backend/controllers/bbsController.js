var dbfacade = require('../DB/DBFacade');


exports.write = function(_data,_callback){
  dbfacade.writeBoard(_data,_callback);
}

exports.delete = function(_data,_callback){
  dbfacade.deleteBoard(_data,_callback);
}

exports.getBbsList = function(_data,_callback){
  dbfacade.getBbsList(_data,_callback);
}

exports.getPages = function(_callback){
  dbfacade.getPages(_callback);
}

exports.getBb = function(_data,_callback){
  dbfacade.getBb(_data,_callback);
}

exports.getUserSerialFromBb = function(_data,_callback){
  dbfacade.getUserSerialFromBb(_data,_callback);
}

exports.getComments = function(_data,_callback){
  dbfacade.getComments(_data,_callback);
}

exports.writeComment = function(_data,_callback){
  dbfacade.writeComment(_data,_callback);
}