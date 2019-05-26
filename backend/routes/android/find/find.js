var express = require('express');
var router = express.Router();
var jsonRouter = require('./json');
var action = require('./action');
/* GET home page. */

router.use('/json', jsonRouter);
router.use('/action', action);

module.exports = router;
