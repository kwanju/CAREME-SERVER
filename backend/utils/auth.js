/**
 * 
 * To check authentication by session.
 */
exports.auth = function(_req){
  if(_req.session.user)
    return true;
  else
    return false;
}

exports.userAuth = function(_req,_serial){
  if(_req.session.user&&_req.session.user.serial==_serial)
    return true;
  else
    return false;
}

exports.sendAlertBack = function(_res,_message){
  _res.send("<script>alert('"+_message+"');history.back();</script>");
}