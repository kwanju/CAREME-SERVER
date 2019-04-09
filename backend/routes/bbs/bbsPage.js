var express = require('express');
var router = express.Router();

router.get("/", function (_req, _res) {
  _res.render('layout/main', { body: "../bbs/bbsList", csession: _req.csession });
});

router.get("/write", function (_req, _res) {
  if (_req.session.user)
    _res.render('layout/main', { body: "../bbs/write", csession: _req.csession });
  else
    _res.send("<script>alert('로그인이 필요합니다');history.back();</script>")
})

router.get("/bb/:serial", function (_req, _res) {
  if (_req.params.serial) {
    var bc = require('../../controllers/bbsController');
    bc.getBb(parseInt(_req.params.serial), function (_result) {
      console.log(JSON.stringify(_result));
      _res.render("layout/main", { body: '../bbs/bb', csession: _req.csession, bb:JSON.stringify(_result) });
    });
  } else
    _res.send("<script>alert('잘못된 접근입니다.');history.back();</script>");

});

module.exports = router;