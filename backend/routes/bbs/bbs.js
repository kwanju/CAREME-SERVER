var express = require('express');
var router = express.Router();


var page = require('./bbsPage');
var action = require('./bbsAction');
var json = require('./bbsJSON');
var verbose = require("../../verbose");
const PATH = "route/user.js"



router.use("/JSON",json);
router.use(page);
router.use("/action",action);


module.exports = router;
