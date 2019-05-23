const nodemailer = require('nodemailer');
const fs = require('fs');

exports.mailer = function (email, _callback) {
    mailer(email, function (result) {
        _callback();
    })
}

var mailer = function(email, _callback) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rhskwn123@gmail.com',  // gmail 계정 아이디를 입력
            pass: 'qwer1234!@#$'          // gmail 계정의 비밀번호를 입력
        }
    });

    let mailOptions = {
        from: 'CareMe <rhskwn123@gmail.com>',    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
        to: email,                     // 수신 메일 주소
        subject: 'Test mail title',   // 제목
        text: 'Test mail text',  // 내용
        attachments: [
            {
                filename: '1.jpg', // 파일 이름
                path: './drive/animalImage/1.jpg' // 파일 경로
                //streamSource: fs.createReadStream('./drive/animalImage/1.jpg'), // 안됨 왜?
            }
        ]
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent: ' + info.response);
            _callback();
        }
    });
}