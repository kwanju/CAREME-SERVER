var express = require('express');
var router = express.Router();
var userRouter = require('./user/user');
var shelterRouter = require('./shelter/shelter');
var discoverRouter = require('./discover/discover');
var findRouter = require('./find/find');
var discoverFindRouter = require('./discoverFind/discoverFind');
/* GET home page. */

router.use('/user', userRouter);
router.use('/shelter', shelterRouter);
router.use('/discover', discoverRouter);
router.use('/find', findRouter);
router.use('/discoverFind', discoverFindRouter);


module.exports = router;
