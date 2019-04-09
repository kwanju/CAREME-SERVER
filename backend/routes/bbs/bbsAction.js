var express = require('express');
var router = express.Router();
var auth = require('../../utils/auth');

router.post("/write", function (_req, _res) {
  var bc = require('../../controllers/bbsController');
  var date = require('../../utils/date');

  var data = {
    title: _req.body.title,
    content: _req.body.bbs_write_content,
    time: date(),
    user_serial: _req.session.user.serial
  }
  bc.write(data, function () {
    _res.redirect('/bbs');
  });

});

router.post("/delete", function (_req, _res) {
  var bc = require('../../controllers/bbsController');
  
  var serial = parseInt(_req.body.serial);
  
  bc.getUserSerialFromBb({serial:serial}, function (_user_serial) { // get User_Serial from bbs serial
    if (auth.userAuth(_req, _user_serial)) { // if auth success
      bc.delete({
        serial: serial
      }, function () {
        _res.redirect("/bbs");
      })
    } else // 
      auth.sendAlertBack(_res,"잘못된 접근입니다.");
  });
});

router.post('/writeComment',function(_req,_res){
  if(auth.auth(_req)){
    var bc = require('../../controllers/bbsController');
    bc.writeComment({
      bbs_serial:parseInt(_req.body.bbs_serial),
      user_serial:_req.session.user.serial,
      content:_req.body.content
    },
    function(){
      _res.send(JSON.stringify({result:1}));
    });
  }else
    _res.send(JSON.stringify({result:2}))
});

module.exports = router;