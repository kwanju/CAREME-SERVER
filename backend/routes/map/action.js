var express = require('express');
var router = express.Router();

router.post('/login', function (_req, _res) {

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


module.exports = router;