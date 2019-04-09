var express = require('express');
var router = express.Router();

var JSONuser = require('./userJSON');
var page = require('./userPage');
var action = require('./userAction');
var verbose = require("../../verbose");
const PATH = "route/user.js"



router.use("/JSON",JSONuser);
router.use(page);
router.use("/action",action);


module.exports = router;
