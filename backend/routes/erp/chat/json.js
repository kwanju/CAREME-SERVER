var express = require('express');
var router = express.Router();
var insertIdxIntoBody = require('../../../utils/erp/insertIdxIntoBody');
var chat = require('../../../model/erp/chat');

router.post('/getChatList', insertIdxIntoBody, function (_req, _res) {
    chat.getChatList(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getShelter', insertIdxIntoBody, function (_req, _res) {
    chat.getShelter(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getChat', insertIdxIntoBody, function (_req, _res) {
    chat.getChat(_req.body, function (_result) {
        _res.send(_result);
    });
});

router.post('/getUserInChat', function (_req, _res) {
    chat.getUserInChat(_req.body, function (_user) {
        _res.send(_user);
    });
});
module.exports = router;