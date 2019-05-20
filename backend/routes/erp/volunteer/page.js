var express = require('express');
var router = express.Router();

router.get("/volunteer", function(_req,_res){
  _res.render('layout/main2', { body:"../erp/volunteer",head:"../erp/head/indexHead",javascript:"../erp/javascript/indexJavascript",  csession:_req.csession});
});

module.exports = router;