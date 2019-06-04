var messageModel = require('../model/chat/message');
var member = require('./member');
var socket = require('./socket');

exports.getMessage = function (_socket) {

    //메시지를 서버에서 전송 받았을 때.
    _socket.on('message', function (_message) {
        var message = JSON.parse(_message);
        console.log(message)
        var socketId = member.getMember(message.type, message.user_idx, message.shelter_idx);

        if (socketId == null) // 현재 소켓 연결이 안되어 있을 때(현재 채팅창에 없음)
            message.read_state = 0
        else { // 현재 소켓연결이 되어있을 때(현재 채팅창에 있음)
            message.read_state = 1

            var sendMessage = {
                shelter_idx: message.shelter_idx,
                user_idx: message.user_idx,
                message: message.message
            }
            socket.send('message', socketId, JSON.stringify(sendMessage));
        }
        messageModel.saveMessage(message, function () {

        });

    });
}