

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

CREATE TABLE user(
    idx int(10) not null AUTO_INCREMENT,
    id varchar(100) not null,
    pw varchar(100) not null,
    phone_number varchar(100),
    email varchar(100),
    PRIMARY KEY(idx)
);

CREATE TABLE animal(
    idx int(10) not null AUTO_INCREMENT,
    species_code int(10) COMMENT '견종 코드 ( 견종코드로 나타내는 것이 좋을 것 같음)',
    estimated_birth_age int(10) COMMENT '추정 태어난 연도',
    name varchar(100),
    sex char(1) COMMENT 'M:남 / W:여',
    weight int(10),
    url_picture varchar(400) COMMENT '사진 url',
    register_data date COMMENT '보호소에 등록된 날짜',
    discovered_spot varchar(400) COMMENT '발견된 장소',
    state int(3) COMMENT '견종 상태 - 0:안락사 / 1:보호소 보호중 / .... (점차 추가해야함)',
    shelter_idx,state int(10) not null COMMENT '보호중인 보호소 id',
    discover_idx int(10) COMMENT '발견했어요 id - null:발견했어요로 보호소에 가져오지 않았을 때 - 발견했어요 만들었을 때 FOREIGNKEY설정필요',
    description varchar(1000) COMMENT '유기동물 설명',
    PRIMARY KEY(idx),
    FOREIGN KEY(shelter_idx,state) REFERENCES shelter(idx)
);

INSERT INTO user(id,pw,phone_number,email) VALUES('test','test','01012345678','test@test.com');

INSERT INTO shelter(id,pw,name) VALUES('test','test','테스트보호소');

--test
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(1,'뽀삐',"http://192.168.43.244:3000/drive/animalImage/1.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(3,'삐삐',"http://192.168.43.244:3000/drive/animalImage/2.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(2,'뿌삐',"http://192.168.43.244:3000/drive/animalImage/3.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(1,'아나',"http://192.168.43.244:3000/drive/animalImage/4.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(3,'아마',"http://192.168.43.244:3000/drive/animalImage/5.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(4,'가나',"http://192.168.43.244:3000/drive/animalImage/6.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(5,'라마',"http://192.168.43.244:3000/drive/animalImage/7.jpg",1,1);
INSERT INTO animal(species_code,name,shelter_idx,state) VALUES(2,'파카',1,1);
INSERT INTO animal(species_code,name,shelter_idx,state) VALUES(2,'나나나',1,1);
INSERT INTO animal(species_code,name,shelter_idx,state) VALUES(2,'가가가가가가',1,1);