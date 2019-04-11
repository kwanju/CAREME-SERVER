

CREATE DATABASE ZANGDOL DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

use ZANGDOL;

CREATE TABLE shelter(
    idx int(10) not null AUTO_INCREMENT,
    id varchar(100) not null,
    pw varchar(100) not null,
    name varchar(255) not null,
    position varchar(255),
    phone_number varchar(100),
    start_time time,
    end_time time ,
    PRIMARY KEY(idx)
);

INSERT INTO shelter(id,pw,name) VALUES('test','test','테스트보호소');