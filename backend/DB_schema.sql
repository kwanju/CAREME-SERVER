

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
    description varchar(1000) COMMENT '보호소 설명 기입',
    volunteer_description varchar(1000) COMMENT '자원봉사에 대한 설명 기입란.',
    volunteer_start_time time COMMENT '자원봉사 가능 시작시간',
    volunteer_end_time time COMMENT '자원봉사 가능 종료시간',
    PRIMARY KEY(idx)
);

CREATE TABLE user(
    idx int(10) not null AUTO_INCREMENT,
    id varchar(100) not null,
    pw varchar(100) not null,
    nickname varchar(100) not null,
    phone_number varchar(100),
    email varchar(100),
    token varchar(1000),
    PRIMARY KEY(idx),
    UNIQUE(id)
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
    shelter_idx int(10) not null COMMENT '보호중인 보호소 id',
    discover_idx int(10) COMMENT '발견했어요 id - null:발견했어요로 보호소에 가져오지 않았을 때 - 발견했어요 만들었을 때 FOREIGNKEY설정필요',
    description varchar(1000) COMMENT '유기동물 설명',
    PRIMARY KEY(idx),
    FOREIGN KEY(shelter_idx) REFERENCES shelter(idx)
);

CREATE TABLE schedule(
    idx int(10) not null AUTO_INCREMENT,
    date date COMMENT '스케쥴 날짜',
    user_idx int(10) not null COMMENT '사용자 id',
    animal_idx int(10) not null COMMENT 'animal id',
    permit int(1) default 0 COMMENT '1: 허가 / 0: 아직 결정안됨. / -1: 거절',
    apply_datetime datetime COMMENT '사용자가 요청한 날짜시간',
    read_state int(1) default 0 COMMENT '1: 처리, 0: 처리안함, -1: ?',
    PRIMARY KEY(idx),
    FOREIGN KEY(user_idx) REFERENCES user(idx),
    FOREIGN KEY(animal_idx) REFERENCES animal(idx)
);

INSERT INTO user(id,pw,phone_number,email,nickname) VALUES('test','test','01012345678','test@test.com', 'abccccc');
CREATE TABLE discover(
    idx int(10) not null AUTO_INCREMENT,
    discover_datetime datetime COMMENT '유기동물을 발견한 날짜 및 시간',
    discovered_spot varchar(1000) COMMENT '유기동물을 발견한 장소',
    description varchar(1000) COMMENT '발견한 유기동물 특징'
    species_code int(10) COMMENT '견종 코드',
    animal_sex char(1) COMMENT '발견된 유기동물 성별',
    url_picture varchar(1000) COMMENT '발견된 유기동물 사진',
    register_datetime datetime COMMENT '발견했어요에 등록한 시간',
    user_idx int(10) not null COMMENT '등록한 유저 idx',
    matching_shelter_idx int(10) COMMENT '매칭된 shelter idx',
    PRIMARY KEY(idx),
    FOREIGN KEY(user_idx) REFERENCES user(idx),
    FOREIGN KEY(matching_shelter_idx) REFERENCES shelter(idx)
);

INSERT INTO shelter(id,pw,name) VALUES('test','test','테스트보호소');

--test
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(1,'뽀삐',"drive/animalImage/1.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(3,'삐삐',"drive/animalImage/2.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(2,'뿌삐',"drive/animalImage/3.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(1,'아나',"drive/animalImage/4.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(3,'아마',"drive/animalImage/5.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(4,'가나',"drive/animalImage/6.jpg",1,1);
INSERT INTO animal(species_code,name,url_picture,shelter_idx,state) VALUES(5,'라마',"drive/animalImage/7.jpg",1,1);
INSERT INTO animal(species_code,name,shelter_idx,state) VALUES(2,'파카',1,1);
INSERT INTO animal(species_code,name,shelter_idx,state) VALUES(2,'나나나',1,1);
INSERT INTO animal(species_code,name,shelter_idx,state) VALUES(2,'가가가가가가',1,1);

INSERT INTO schedule(date,user_idx,animal_idx) VALUES ('2019-4-29',1,1);
INSERT INTO schedule(date,user_idx,animal_idx) VALUES ('2019-4-30',1,1);
