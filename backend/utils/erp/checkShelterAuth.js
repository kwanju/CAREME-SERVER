
module.exports = function(_req,_res,_next){
  
  if(_req.session.user){ // while user is in login
    if(_req.session.user.auth==0)
        _res.send("<script>alert('보호소 인증 후 사용하실수 있습니다.');history.back();</script>")
    else
        _next();
    
  }else // while user is not in login
    _res.send("<script>alert('로그인이 필요합니다');history.back();</script>")

  
}