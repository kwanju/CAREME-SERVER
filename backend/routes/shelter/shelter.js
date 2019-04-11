var express = require('express');
var router = express.Router();

var JSONuser = require('./json');
var page = require('./page');
var action = require('./action');
var verbose = require("../../verbose");
const PATH = "route/user.js"



router.use("/JSON",JSONuser);
router.use(page);
router.use("/action",action);


module.exports = router;
