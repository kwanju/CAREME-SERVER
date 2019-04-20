var express = require('express');
var router = express.Router();
var userRouter = require('./user/user');
var shelterRouter = require('./shelter/shelter');
/* GET home page. */

router.use('/user',userRouter);
router.use('/shelter',shelterRouter);

module.exports = router;
