var eventFactory = require('./eventFactory');

socket = new Socket()

function Socket() {
    this.io = null;
}

Socket.prototype.init = function (_server) {
    this.io = require('socket.io')(_server);
}

exports.init = function (_server) {
    socket.init(_server);

    //여기에 on 설정 모두가 들어가야함.
    socket.io.on('connection', function (_socket) {
        eventFactory.getEvents(_socket);
    });
}

exports.getIo = function () {
    return socket.io
}