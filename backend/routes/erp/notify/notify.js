var express = require('express');
var router = express.Router();

var JSONuser = require('./json');
var page = require('./page');
var action = require('./action');



router.use("/json",JSONuser);
router.use(page);
//router.use("/action",action);


module.exports = router;
