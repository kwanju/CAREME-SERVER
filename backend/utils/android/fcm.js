// http://www.itpaper.co.kr/node-js%EB%A1%9C-fcm-%EB%B0%9C%EC%86%A1-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0/

var FCM = require('fcm-node');
var config = require('../../config').fcm;

var fcm = new FCM(config.serverKey);



exports.send = function (to, body) {
    var pushData = {
        // 수신대상
        to: "",
        // 메시지 중요도
        priority: "high",
        // App 패키지 이름
        restricted_package_name: config.package,
        // App이 실행중이지 않을 때 상태바 알림으로 등록할 내용
        
        // App에게 전달할 데이터 이 안의 내용은 자유롭게 구성한다.
        data: {
            title: "에러모드",
            body: "",
            go:"me"
        }
    }
    pushData.to = to;
    pushData.data.body = body;

    fcm.send(pushData, function (_err, _res) {
        if (_err){
            console.log(_err);
            return;
        }
            
        console.log(_res);
    });
}

