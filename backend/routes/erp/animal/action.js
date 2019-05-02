var express = require('express');
var router = express.Router();

router.post('/login', function (_req, _res) {

  var loginConroller = require('../../controllers/loginController');

  loginConroller.login(_req.body.id, _req.body.pw, function (_result) {
    if (_result == null)
      _res.send("<script>alert('아이디 혹은 패스워드가 잘못되었습니다');history.back();</script>");
    else {

      _req.session.user = _result[0];

      if (_req.body.from)
        _res.redirect(_req.body.from);
      else
        _res.redirect("/");
    }
  });
});

router.post('/registration', function (_req, _res) {
  var uc = require('../../controllers/shelterController');
  uc.registration(_req.body, function () {
    _res.redirect('/');
  });
});

router.get('/logout',function(_req,_res){
  _req.session.destroy();
  _res.redirect('/');
});

router.post('/addAnimal', function (_req, _res) {
  var add_animal = require('../../controllers/shelterController');
});

router.post('/deleteAnimal', function (_req, _res) {
  var add_animal = require('../../controllers/shelterController');
});

router.post('/getAnimalList', function (_req, _res) {
  var add_animal = require('../../controllers/shelterController');
});

module.exports = router;