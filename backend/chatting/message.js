var messageModel = require('../model/chat/message');

exports.getMessage = function (_socket) {

    //메시지를 서버에서 전송 받았을 때.
    _socket.on('message', function (_message) {
        var message = JSON.parse(_message);

        messageModel.saveMessage(message, function () {

        });

    });
}