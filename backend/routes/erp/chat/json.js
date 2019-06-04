var express = require('express');
var router = express.Router();
var insertIdxIntoBody = require('../../../utils/erp/insertIdxIntoBody');
var chat = require('../../../model/erp/chat');

router.post('/getChatList', insertIdxIntoBody, function (_req, _res) {
    chat.getChatList(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getShelterIdx', insertIdxIntoBody, function (_req, _res) {
    _res.send(_req.body);
});

router.post('/getChat', insertIdxIntoBody, function (_req, _res) {
    chat.getChat(_req.body, function (_result) {
        _res.send(_result);
    });
});
module.exports = router;