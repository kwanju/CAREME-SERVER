

CREATE DATABASE myapp DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

use myapp;

CREATE TABLE user(
serial int(10) not null,
id varchar(50) not null,
pw varchar(50) not null,
nickname varchar(50) not null,
PRIMARY KEY(serial)
);

CREATE TABLE bbs(
  serial int(10) not null AUTO_INCREMENT,
  user_serial int(10) not null,
  title varchar(100) not null,
  content varchar(2000) not null,
  time datetime,
  remove int(2) DEFAULT 0,
  PRIMARY KEY(serial),
  FOREIGN KEY(user_serial) REFERENCES user(serial)
);

INSERT INTO bbs(user_serial,title,content,time) VALUES (0,'테스트입니다.','{"ops":[{"insert":"테스트입니다\\n"}]}','19-01-15');
{"ops":[{"insert":"테스트입니다\\n"}]}

CREATE TABLE bbs_comment(
  serial int(10) not null AUTO_INCREMENT,
  bbs_serial int(10) not null,
  user_serial int(10) not null,
  content varchar(2000) not null,
  time datetime,
  remove int(2) DEFAULT 0,
  PRIMARY KEY(serial),
  FOREIGN KEY(bbs_serial) REFERENCES bbs(serial),
  FOREIGN KEY(user_serial) REFERENCES user(serial)
);