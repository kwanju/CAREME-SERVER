var express = require('express');
var router = express.Router();

router.get("/chat", function(_req,_res){
  _res.render('layout/chatMain', { body:"../erp/chat", head:"../erp/head/chatHead",javascript:"../erp/javascript/chatJavascript", csession:_req.csession});
});

module.exports = router;