var messageModel = require('../model/chat/message');
var member = require('./member');
var socket = require('./socket');
var fcm = require('../utils/android/fcm');
var config = require('../config').fcm

exports.getMessage = function (_socket) {

    //메시지를 서버에서 전송 받았을 때.
    _socket.on('message', function (_message) {
        var message = JSON.parse(_message);
        console.log(message)
        var socketId = member.getMember(message.type, message.user_idx, message.shelter_idx);
        message.read_state = 0
        messageModel.saveMessage(message, function (_idx) { // 디비에 먼저 등록
            if (socketId != null) { // 현재 소켓연결이 되어있을 때(현재 채팅창에 있음)

                var sendMessage = {
                    message_idx: _idx,
                    shelter_idx: message.shelter_idx,
                    user_idx: message.user_idx,
                    message: message.message,
                    send_time: require('../utils/date')()
                }
                console.log(sendMessage);
                socket.send('message', socketId, JSON.stringify(sendMessage));
            } else { // 현재 소켓연결이 안되어있을 때
                if (message.type == 1) // 사용자로 보내는 것일 때
                    messageModel.getPushInfoInChat({ idx: _idx }, function (_push) {
                        fcm.send(_push.token, _push.name + " : " + _push.message, config.mode.CHAT, {
                            shelter_idx: _push.shelter_idx,
                            shelter_name: _push.name,
                            message: _push.message
                        });
                    });

            }
        });
    });

    _socket.on('ack', function (_msg) {
        var message = JSON.parse(_msg);
        console.log("ACK : " + message.message_idx);
        messageModel.ackMessage({ message_idx: message.message_idx }, function () { });
    });

}