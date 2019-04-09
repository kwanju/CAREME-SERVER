var express = require('express');
var router = express.Router();

router.post('/bbslist',function(_req,_res){
  var bc = require('../../controllers/bbsController');
  bc.getBbsList({page:_req.body.page},function(_results){
    _res.send(JSON.stringify(_results));
  });
});

router.post('/pages',function(_req,_res){
  var bc = require('../../controllers/bbsController');
  bc.getPages(function(_result){
    _res.send(String(_result));
  });
});

router.post('/comments',function(_req,_res){
  if(!_req.body.bbs_serial){
    _res.send(JSON.stringify({result:2}));
    return;
  }
  var bc = require('../../controllers/bbsController');
  bc.getComments({bbs_serial:parseInt(_req.body.bbs_serial)},function(_results){
    _res.send(JSON.stringify({result:1,list:_results}));
  });
});



module.exports = router;